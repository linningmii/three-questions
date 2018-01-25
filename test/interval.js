const expect = require('expect')
let {setIntervalPolyfill, clearIntervalPolyfill, sleep, sleepPolyfill, setTimeoutPolyfill} = require('../src')

describe('interval test case', function () {
  it('should to be 3', async function () {
    let score = 0

    const timerId = setInterval(() => {
      if (score === 0) {
        score += 2
      }
      clearInterval(timerId)
    }, 500)

    setTimeout(() => {
      score += 1
    }, 500)

    await sleep(1000)
    expect(score).toBe(3)
  })

  it('should equal [0, 0, 0]', async function () {
    const arr = []

    // node环境下此处实现和chrome不同, chrome下可以正确的输出长度为3的数组, 而node下代码的执行时间占据了计时器的时间
    setInterval(() => {
      arr.push(0)
    }, 300)

    await sleep(901)
    expect(arr).toEqual([0, 0])
  })

  it('should equal [0, 0, 0]', async function () {
    const arr = []

    setIntervalPolyfill(() => {
      arr.push(0)
    }, 300)

    await sleepPolyfill(1000)
    expect(arr).toEqual([0, 0, 0])
  })

  it('should to be 4', async function () {
    let score = 0

    const timerId = setIntervalPolyfill(() => {
      if (score === 0) {
        score += 2
      }
      clearIntervalPolyfill(timerId)
    }, 500)

    setTimeoutPolyfill(() => {
      score += 2
    }, 500)

    await sleepPolyfill(1000)
    expect(score).toBe(4)
  })
})
