const uuid = require('uuid')
const queue = require('./asynchronous-queue')

// 用于缓存当前存在的定时器id, 可以通过clearInterval(timerId)停止定时器
const timerCache = Object.create(null)

function setIntervalPolyfill (fn, delay, ...args) {
  if (typeof fn !== 'function') {
    throw new TypeError('Not a valid function')
  }

  const timerId = uuid.v4()
  timerCache[timerId] = true

  function intervalDelayFn () {
    if (!timerCache[timerId]) {
      return
    }

    fn(...args)
    queue.push(intervalDelayFn, delay)
  }

  queue.push(intervalDelayFn, delay)
  return timerId
}

function clearIntervalPolyfill (timerId) {
  delete timerCache[timerId]
}

module.exports = {
  setIntervalPolyfill,
  clearIntervalPolyfill
}
