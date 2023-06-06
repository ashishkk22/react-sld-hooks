export function getSubscription(
  event: string,
  target: Document | Window = document
) {
  return function (cb: () => void) {
    target.addEventListener(event, cb);
    return () => target.removeEventListener(event, cb);
  };
}
