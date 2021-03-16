export {
  defaultWindowTimeout,
  emitStorageEvent,
  listenForStorageEvent,
  monitorOtherListener,
} from "./storage_listener";
export type {
  CustomListenerOptions,
  ListenForStorageEventResponse,
  MonitorOtherListenerResponse,
  PromiseController,
} from "./storage_listener";
export { createIframe, ensureUrl } from "./utils";

export const defaultHandshakeMaxAttempts = 100;
export const defaultHandshakeAttemptsInterval = 100;

export type BridgeMetadata = {
  relativeRouterUrl: string;
  routerName: string;
  routerW: number;
  routerH: number;
};

export type Schema = {
  name: string;
  version: string;
  mysky?: boolean;
  defaultProviders?: [
    {
      name: string;
      url: string;
    }
  ];
  methods: {
    [index: string]: {
      parameters?: Array<{
        name: string;
        type: string;
        optional?: boolean;
      }>;
      returnType?: string;
    };
  };
};

export class ProviderInfo {
  constructor(public name: string, public domain: string) {}
}

export type ProviderMetadata = {
  schema: Schema;
  info: ProviderInfo;

  relativeConnectorPath: string;
  connectorName: string;
  connectorW: number;
  connectorH: number;
};

export class SkappInfo {
  constructor(public domain: string) {}
}
