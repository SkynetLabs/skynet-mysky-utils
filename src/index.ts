export { getPathDomain, getParentPath, sanitizePath } from "./paths";
export {
  Permission,
  PermCategory,
  PermType,
  permCategoryToString,
  permTypeToString,
  // Constants
  PermDiscoverable,
  PermHidden,
  PermLegacySkyID,
  PermRead,
  PermWrite,
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
export {
  createFullScreenIframe,
  createIframe,
  ensureUrl,
  trimSuffix,
} from "./utils";
export {
  dispatchedErrorEvent,
  errorWindowClosed,
  monitorWindowError,
} from "./window-listener";

import { Permission } from "./permissions";

export const defaultHandshakeMaxAttempts = 150;
export const defaultHandshakeAttemptsInterval = 100;

export type CheckPermissionsResponse = {
  grantedPermissions: Permission[];
  failedPermissions: Permission[];
};
