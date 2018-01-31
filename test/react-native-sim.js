const path = require('path');
const Module = require('module');

const originalRequire = Module.prototype.require;
Module.prototype.require = function(){
  const args = Array.from(arguments);

  // replace the isomorphic-webcrypto module with the react-native one
  if (args[0] === '../') {
    const modulePath = require.resolve(args[0]);
    args[0] = path.resolve(path.dirname(modulePath), '../dist/react-native.js');
  }

  return originalRequire.apply(this, args);
};

delete global.Buffer;

require('./node');
