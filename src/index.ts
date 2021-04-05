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

export const defaultHandshakeMaxAttempts = 100;
export const defaultHandshakeAttemptsInterval = 100;

export const errorWindowClosed = "window-closed";

export class ProviderInfo {
  constructor(public name: string, public domain: string) {}
}

export type ProviderMetadata = {
  info: ProviderInfo;

  relativeConnectorPath: string;
  connectorName: string;
  connectorW: number;
  connectorH: number;
};

export class SkappInfo {
  constructor(public domain: string) {}
}
