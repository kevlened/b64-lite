const b64 = require('../');

describe('b64', () => {
  it('btoa', () => expect(b64.btoa('hi there')).toBe('aGkgdGhlcmU='))
  it('atob', () => expect(b64.atob('aGkgdGhlcmU=')).toBe('hi there'))
  it('btoa', () => expect(() => b64.btoa('你好')).toThrowError(
    /The string to be encoded contains characters outside of the Latin1 range./))
  it('atob', () => expect(b64.atob('5L2g5aW9')).not.toBe('你好'))
  it('toBase64', () => expect(b64.toBase64('你好')).toBe('5L2g5aW9'))
  it('toBase64 - ArrayBuffer - utf-8', () =>
    expect(b64.toBase64(new Uint8Array([228, 189, 160, 229, 165, 189]).buffer)).toBe('5L2g5aW9'))
  it('toBase64 - ArrayBuffer - ascii', () =>
    expect(b64.toBase64(new Uint8Array([104, 105, 32, 116, 104, 101, 114, 101]).buffer)).toBe('aGkgdGhlcmU='))
  it('fromBase64', () => expect(b64.fromBase64('5L2g5aW9')).toBe('你好'))
  it('toBuffer', () => expect(b64.toBuffer('5L2g5aW9')).toEqual(new Uint8Array([228, 189, 160, 229, 165, 189])))
})
