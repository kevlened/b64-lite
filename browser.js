export function atob(b64) {
  return window.atob(b64) 
}
export function btoa(bin) {
  return window.btoa(bin) 
}
export function toBase64(input) {
  if (typeof input === 'string')
    return window.btoa(unescape(encodeURIComponent(input)))
  else {
    var buffer = new Uint8Array(input);
    var binary = '';
    for (var b = 0; b < buffer.byteLength; b++) {
        binary += String.fromCharCode(buffer[b]);
    }
    return window.btoa(binary);
  }
}
export function fromBase64(b64) {
  return decodeURIComponent(escape(window.atob(b64)))
}
export function toBuffer(b64) {
  var utf8 = window.atob(b64);
  var result = new Uint8Array(utf8.length);
  for (var i = 0; i < utf8.length; i++) {
      result[i] = utf8.charCodeAt(i);
  }
  return result;
}
