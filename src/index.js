module.exports = {
  flatten: require('./flatten'),
  tailRecursiveFlatten: require('./tail-recursive-flatten'),
  setIntervalPolyfill: require('./interval').setIntervalPolyfill,
  clearIntervalPolyfill: require('./interval').clearIntervalPolyfill,
  sleep: require('./sleep'),
  sleepPolyfill: require('./sleep-polyfill'),
  setTimeoutPolyfill: require('./timeout')
}
