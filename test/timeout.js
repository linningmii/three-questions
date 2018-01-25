const {setTimeoutPolyfill, sleepPolyfill} = require('../src')
const expect = require('expect')

describe('timeout test case', function () {
  it('should equal 1', async function () {
    let v = 0

    setTimeoutPolyfill(() => {
      v += 1
    }, 300)

    await sleepPolyfill(800)
    expect(v).toBe(1)
  })

  it('should equal 2', async function () {
    let v = 0

    setTimeoutPolyfill(val => {
      v += val
    }, 300, 2)

    await sleepPolyfill(800)
    expect(v).toBe(2)
  })
})
