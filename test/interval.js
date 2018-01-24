const expect = require('expect')
let {setIntervalPolyfill, clearIntervalPolyfill, sleep} = require('../src')

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

  it('should to be 4', async function () {
    let score = 0

    const timerId = setIntervalPolyfill(() => {
      if (score === 0) {
        score += 2
      }
      clearIntervalPolyfill(timerId)
    }, 500)

    setTimeout(() => {
      score += 2
    }, 500)

    await sleep(1000)
    expect(score).toBe(4)
  })

  it('should equal [0, 0, 0]', async function () {
    const arr = []

    setIntervalPolyfill(() => {
      arr.push(0)
    }, 300)

    await sleep(910)
    expect(arr).toEqual([0, 0, 0])
  })
})
