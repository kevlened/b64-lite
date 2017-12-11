export const atob = window.atob.bind(window)
export const btoa = window.btoa.bind(window)
export function toBase64(string) {
  return btoa(unescape(encodeURIComponent(string)))
}
export function fromBase64(b64) {
  return decodeURIComponent(escape(atob(b64)))
}
export default {
  atob,
  btoa,
  toBase64,
  fromBase64
}
