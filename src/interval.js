const uuid = require('uuid')
const requestAnimationFrame = require('raf')

class Queue extends Array {
  constructor () {
    super()
  }

  push () {
  }
}

const queue = new Queue()

// 用于缓存当前存在的定时器id, 可以通过clearInterval(timerId)停止定时器
const timerCache = Object.create(null)

function setIntervalPolyfill (fn, delay, ...args) {
  let time = (new Date).getTime()
  if (typeof fn !== 'function') {
    throw new TypeError('Not a valid function')
  }

  const timerId = uuid.v4()
  timerCache[timerId] = true

  function delayFn () {
    let currentTime = (new Date).getTime()
    if (currentTime - time >= delay) {
      fn(...args)
      time = (new Date).getTime()
    }

    if (timerCache[timerId]) {
      requestAnimationFrame(delayFn)
    }
  }

  requestAnimationFrame(delayFn)
  return timerId
}

function clearIntervalPolyfill (timerId) {
  delete timerCache[timerId]
}

module.exports = {
  setIntervalPolyfill,
  clearIntervalPolyfill
}
