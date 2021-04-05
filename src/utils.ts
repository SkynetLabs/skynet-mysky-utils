/**
 * Creates an invisible iframe with the given src and adds it to the page.
 */
export function createIframe(srcUrl: string, name: string): HTMLIFrameElement {
  srcUrl = ensureUrl(srcUrl);

  const childFrame = document.createElement("iframe")!;
  childFrame.src = srcUrl;
  childFrame.name = name;
  childFrame.style.display = "none";

  // Set sandbox permissions.
  // TODO: Enable sandboxing?
  // childFrame.sandbox.add("allow-same-origin");
  // childFrame.sandbox.add("allow-scripts");

  document.body.appendChild(childFrame);
  return childFrame;
}

/**
 * Creates a full-screen iframe with the given src and adds it to the page.
 */
export function createFullScreenIframe(srcUrl: string, name: string): HTMLIFrameElement {
  srcUrl = ensureUrl(srcUrl);

  const childFrame = document.createElement("iframe")!;
  childFrame.src = srcUrl;
  childFrame.name = name;
  childFrame.style.content = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;";

  // Set sandbox permissions.
  // TODO: Enable sandboxing?
  // childFrame.sandbox.add("allow-same-origin");
  // childFrame.sandbox.add("allow-scripts");

  document.body.appendChild(childFrame);
  return childFrame;
}

export function ensureUrl(url: string): string {
  return ensurePrefix(url, "https://");
}

function ensurePrefix(s: string, prefix: string): string {
  if (!s.startsWith(prefix)) {
    s = `${prefix}${s}`;
  }
  return s;
}
