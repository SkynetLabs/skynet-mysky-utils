export const defaultWindowTimeout = 10_000;

export type CustomListenerOptions = {};

export type ListenForStorageEventResponse = {
  promise: Promise<string>;
  controller: PromiseController;
};

export type MonitorOtherListenerResponse = {
  promise: Promise<void>;
  controller: PromiseController;
};

// TODO: Move to more general promise.ts file?
export class PromiseController {
  cleanup() {}
}

export function listenForStorageEvent(
  otherListenerName: string,
  _opts?: CustomListenerOptions
): ListenForStorageEventResponse {
  const abortController = new AbortController();
  const controller = new PromiseController();

  const promise: Promise<string> = new Promise((resolve, reject) => {
    const expectedKeys = ["success", "event", "error"].map(
      (msgType) => `${msgType}-${otherListenerName}`
    );
    // Clear the messages that we're listening for before we start listening.
    expectedKeys.map((key) => window.localStorage.removeItem(key));

    const handleEvent = ({ key, newValue }: StorageEvent) => {
      if (!key) {
        reject("Storage event data not found");
        return;
      }

      // Check that we're listening for this key.
      if (!expectedKeys.includes(key)) {
        return;
      }
      console.log(
        `${otherListenerName}: receiving key: ${key}, value: ${newValue}`
      );
      // Only remove the event listener if an expected key has been found.
      window.removeEventListener("storage", handleEvent);
      // Clear the message.
      window.localStorage.removeItem(key);

      if (key.startsWith("success")) {
        if (!newValue) {
          reject(
            `${otherListenerName}: Storage event data value not found for 'success'`
          );
          return;
        }
        resolve(newValue);
      } else if (key.startsWith("event")) {
        reject("Window was closed");
      } else if (key.startsWith("error")) {
        if (!newValue) {
          reject(
            `${otherListenerName}: Storage event data value not found for 'error'`
          );
          return;
        }
        reject(newValue);
      }
    };

    // @ts-expect-error doesn't recognize signal option.
    window.addEventListener("storage", handleEvent, {
      signal: abortController.signal,
    });

    // Initialize cleanup function.
    controller.cleanup = () => {
      // Abort the event listener.
      abortController.abort();
      // Cleanup the promise.
      resolve("");
    };
  });

  return { promise, controller };
}

export function emitStorageEvent(
  myListenerName: string,
  msgType: "success" | "event" | "error",
  value: string
): void {
  window.localStorage.setItem(`${msgType}-${myListenerName}`, value);
}

/**
 * Returns a promise that periodically sets a value for other's listener name and checks its own listener name for a value and clears it.
 */
export function monitorOtherListener(
  myListenerName: string,
  otherListenerName: string,
  timeout_ms: number
): MonitorOtherListenerResponse {
  myListenerName = `ping-${myListenerName}`;
  otherListenerName = `ping-${otherListenerName}`;

  const pingInterval = 100;
  let silentTime = 0;
  const controller = new PromiseController();

  const promise: Promise<void> = new Promise((resolve, reject) => {
    const pingFunc = () => {
      // Set a value for other's listener key.
      window.localStorage.setItem(otherListenerName, myListenerName);

      // Check own listener key for expected value.
      const value = window.localStorage.getItem(myListenerName);
      if (value !== otherListenerName) {
        silentTime += pingInterval;
      } else {
        silentTime = 0;
      }
      if (silentTime >= timeout_ms) {
        reject("Other window timed out");
      }

      // Clear our listener key.
      window.localStorage.removeItem(myListenerName);
    };

    const intervalId = window.setInterval(pingFunc, pingInterval);

    // Initialize cleanup function.
    controller.cleanup = () => {
      // Clear the interval.
      window.clearInterval(intervalId);
      // Cleanup the promise.
      resolve();
    };
  });

  return { promise, controller };
}
