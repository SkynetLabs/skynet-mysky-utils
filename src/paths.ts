import { trimSuffix } from "./utils";

export function getPathDomain(path: string): string {
  return path.split("/")[0];
}

export function getParentPath(path: string): string | null {
  path = sanitizePath(path);
  const pathArray = path.split("/");

  if (pathArray.length <= 1) {
    return null;
  }

  pathArray.pop();
  path = pathArray.join("/");
  return path;
}

export function sanitizePath(path: string): string {
  // Remove trailing slashes.
  path = trimSuffix(path, "/");

  // Remove duplicate adjacent slashes.
  const pathArray = Array.from(path);
  for (let i = 0; i < pathArray.length - 1; ) {
    if (pathArray[i] === "/" && pathArray[i + 1] === "/") {
      pathArray.splice(i, 1);
    } else {
      i++;
    }
  }
  path = pathArray.join("");

  return path;
}
