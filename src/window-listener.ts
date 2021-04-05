import { PromiseController } from "./storage_listener";

export const errorWindowClosed = "window-closed";

export class ErrorHolder {
  error = "";
}

/**
 * Checks if there has been an error from the window on an interval.
 */
export function monitorWindowError(errorHolder: ErrorHolder): { promise: Promise<void>; controller: PromiseController } {
  const pingInterval = 100;
  const controller = new PromiseController();

  const promise: Promise<void> = new Promise((resolve, reject) => {
    const pingFunc = () => {
      if (errorHolder.error !== "") {
        reject(errorHolder.error);
      }
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
