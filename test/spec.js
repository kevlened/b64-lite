const b64 = require('../');

describe('b64', () => {
  it('btoa', () => expect(b64.btoa('hi there')).toBe('aGkgdGhlcmU='))
  it('atob', () => expect(b64.atob('aGkgdGhlcmU=')).toBe('hi there'))
  it('btoa', () => expect(() => b64.btoa('你好')).toThrowError(
    /The string to be encoded contains characters outside of the Latin1 range./))
  it('atob', () => expect(b64.atob('5L2g5aW9')).not.toBe('你好'))
})
