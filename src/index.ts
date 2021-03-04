export { Provider } from "./provider";

export type BridgeMetadata = {
  minimumInterface: InterfaceSchema;

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
  providerInterface: InterfaceSchema;

  name: string;
  url: string;

  relativeConnectorPath: string;
  connectorName: string;
  connectorW: number;
  connectorH: number;
};

export type SkappInfo = {
  name: string;
  domain: string;
};
