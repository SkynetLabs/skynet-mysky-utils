export class Permission {
  constructor(
    public requestor: string,
    public path: string,
    public category: PermCategory,
    public permType: PermType
  ) {
    if (typeof category !== "number" || !(category in PermCategory)) {
      throw new Error(`Invalid 'category' enum value ${category}`);
    }
    if (typeof permType !== "number" || !(permType in PermType)) {
      throw new Error(`Invalid 'permType' enum value ${permType}`);
    }
  }
}

// Define category constants for non-TS users.
export const PermDiscoverable = 1;
export const PermHidden = 2;
export const PermLegacySkyID = 3;

/**
 * Defines what type of file is being requested. Discoverable files are visible
 * to the entire world, hidden files are only visible to the user (unless
 * shared), and LegacySkyID files are supported files from the legacy SkyID
 * login system.
 */
export enum PermCategory {
  Discoverable = PermDiscoverable,
  Hidden = PermHidden,
  LegacySkyID = PermLegacySkyID,
}

// Define type constants for non-TS users.
export const PermRead = 4;
export const PermWrite = 5;

export enum PermType {
  Read = PermRead,
  Write = PermWrite,
}

export function permCategoryToString(category: PermCategory): string {
  if (category === PermCategory.Discoverable) {
    return "Discoverable";
  } else if (category === PermCategory.Hidden) {
    return "Hidden";
  } else if (category === PermCategory.LegacySkyID) {
    return "LegacySkyID";
  } else {
    throw new Error(`Invalid permission category ${category}`);
  }
}

export function permTypeToString(permType: PermType): string {
  if (permType === PermType.Read) {
    return "Read";
  } else if (permType === PermType.Write) {
    return "Write";
  } else {
    throw new Error(`Invalid permission type ${permType}`);
  }
}
