const requestAnimationFrame = require('raf')

const _check = Symbol('_check')

class AsynchronousQueue extends Array {
  constructor () {
    super()

    this[_check]()
  }

  push (delayFn, delay = 0) {
    const items = [].concat(delayFn)
    const wrappers = items.map(item => ({timestamp: (new Date()).getTime() + delay, fn: item}))
    super.push(...wrappers)
  }

  shift () {
    const wrapper = super.shift()
    if (typeof wrapper.fn === 'function') {
      wrapper.fn()
    }
  }

  [_check] () {
    requestAnimationFrame(this[_check].bind(this))

    if (!this.length) {
      return
    }

    this.sort((pre, next) => pre.timestamp - next.timestamp)

    const time = (new Date()).getTime()

    // 此时的异步队列按照插入时间顺序排列, 倒序查找第一个满足时间条件的索引
    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i].timestamp <= time) {
        for (let j = 0; j <= i; j++) {
          this.shift()
        }
        break
      }
    }
  }
}

const queue = new AsynchronousQueue()

module.exports = queue
