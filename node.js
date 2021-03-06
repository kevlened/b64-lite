export function atob(base64) {
  return Buffer.from(base64, 'base64').toString('binary')
}
export function btoa(byteString) {
  for (let byte of byteString) {
    if (String.prototype.charCodeAt.call(byte, 0) > 255) {
      throw new Error(`Failed to execute 'btoa': The string to be encoded contains characters outside of the Latin1 range.`)
    }
  }
  return Buffer.from(byteString, 'binary').toString('base64')
}
export function toBase64(input) {
  return Buffer.from(input).toString('base64')
}
export function fromBase64(b64) {
  return Buffer.from(b64, 'base64').toString()
}
export function toBuffer(b64) {
  return new Uint8Array(Buffer.from(b64, 'base64'))
}
