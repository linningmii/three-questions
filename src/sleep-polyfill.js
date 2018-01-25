const setTimeoutPolyfill = require('./timeout')

module.exports = function sleep(wait) {
  return new Promise((resolve) => {
    setTimeoutPolyfill(() => {
      resolve()
    }, wait)
  })
}
