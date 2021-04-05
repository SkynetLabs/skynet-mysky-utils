export {
  Permission,
  PermCategory,
  PermType,
  // Constants
  PermDiscoverable,
  PermHidden,
  PermLegacySkyID,
  PermRead,
  PermWrite
} from "./permissions";
export {
  defaultWindowTimeout,
  emitStorageEvent,
  listenForStorageEvent,
  monitorOtherListener,
  PromiseController,
} from "./storage_listener";
export type {
  CustomListenerOptions,
  ListenForStorageEventResponse,
  MonitorOtherListenerResponse,
} from "./storage_listener";
export { createFullScreenIframe, createIframe, ensureUrl } from "./utils";
export { errorWindowClosed, ErrorHolder, monitorWindowError } from "./window-listener";

export const defaultHandshakeMaxAttempts = 100;
export const defaultHandshakeAttemptsInterval = 100;

export class SkappInfo {
  constructor(public domain: string) {}
}
