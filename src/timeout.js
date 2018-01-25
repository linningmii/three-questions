const uuid = require('uuid')
const queue = require('./asynchronous-queue')

const timeoutCache = Object.create(null)

function setTimeoutPolyfill (fn, delay, ...args) {
  if (typeof fn !== 'function') {
    throw new TypeError('Not a valid function')
  }

  const timeoutId = uuid.v4()
  timeoutCache[timeoutId] = true

  function timeoutDelayFn () {
    if (!timeoutCache[timeoutId]) {
      return
    }

    fn(...args)
  }

  queue.push(timeoutDelayFn, delay)
  return timeoutId
}

function clearTimeoutPolyfill (timeoutId) {
  delete timeoutCache[timeoutId]
}

module.exports = setTimeoutPolyfill
