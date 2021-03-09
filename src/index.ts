export { createIframe } from "./utils";

export type BridgeMetadata = {
  relativeRouterUrl: string;
  routerName: string;
  routerW: number;
  routerH: number;
};

export type InterfaceSchema = {
  name: string,
  version: string,
  methods: {
    [index: string]: {
      parameters?: Array<{
        name: string,
        type: string,
        optional?: boolean,
      }>,
      returnType?: string,
    },
  },
};

export type ProviderMetadata = {
  schema: InterfaceSchema;

  name: string;
  url: string;

  relativeConnectorPath: string;
  connectorName: string;
  connectorW: number;
  connectorH: number;
};

export class SkappInfo {
  constructor(public name: string, public domain: string) {}
};
