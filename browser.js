export function atob(b64) {
  return window.atob(b64) 
}
export function btoa(bin) {
  return window.btoa(bin) 
}
export function toBase64(string) {
  return window.btoa(unescape(encodeURIComponent(string)))
}
export function fromBase64(b64) {
  return decodeURIComponent(escape(window.atob(b64)))
}
export default {
  atob,
  btoa,
  toBase64,
  fromBase64
}
