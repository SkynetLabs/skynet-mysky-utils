export {
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

export type BridgeMetadata = {
  relativeRouterUrl: string;
  routerName: string;
  routerW: number;
  routerH: number;
};

export type InterfaceSchema = {
  name: string;
  version: string;
  mysky?: boolean;
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
  schema: InterfaceSchema;
  info: ProviderInfo;

  relativeConnectorPath: string;
  connectorName: string;
  connectorW: number;
  connectorH: number;
};

export class SkappInfo {
  constructor(public name: string, public domain: string) {}
}
