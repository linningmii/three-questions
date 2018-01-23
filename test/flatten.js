const expect = require('expect')
let {flatten, tailRecursiveFlatten} = require('../src')

describe('flatten test case', function () {
  it('should return [1, 2, 3]', function () {
    const source = [1, [2, 3]]
    const result = flatten(source)
    expect(result).toEqual([1, 2, 3])
  })

  it('should return [1, 2, 3, 4, 5]', function () {
    const source = [1, [2, 3, [4, [5]]]]
    const result = flatten(source)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = flatten(source, 0)
    expect(result).toEqual([1, [2, [[3, 4], 5]]])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = flatten(source, 1)
    expect(result).toEqual([1, 2, [[3, 4], 5]])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = flatten(source, 2)
    expect(result).toEqual([1, 2, [3, 4], 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = flatten(source, 3)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = flatten(source, 8)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]], [6, [[7, 8], 9]]]
    const result = flatten(source, 8)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should return [1, 2, [[3, 4], 5], 6, [[7, 8], 9]]', function () {
    const source = [1, [2, [[3, 4], 5]], [6, [[7, 8], 9]]]
    const result = flatten(source, 1)
    expect(result).toEqual([1, 2, [[3, 4], 5], 6, [[7, 8], 9]])
  })
})

describe('tail recursive flatten test case', function () {
  it('should return [1, 2, 3]', function () {
    const source = [1, [2, 3]]
    const result = tailRecursiveFlatten(source)
    expect(result).toEqual([1, 2, 3])
  })

  it('should return [1, 2, 3, 4, 5]', function () {
    const source = [1, [2, 3, [4, [5]]]]
    const result = tailRecursiveFlatten(source)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = tailRecursiveFlatten(source, 0)
    expect(result).toEqual([1, [2, [[3, 4], 5]]])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = tailRecursiveFlatten(source, 1)
    expect(result).toEqual([1, 2, [[3, 4], 5]])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = tailRecursiveFlatten(source, 2)
    expect(result).toEqual([1, 2, [3, 4], 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = tailRecursiveFlatten(source, 3)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]]]
    const result = tailRecursiveFlatten(source, 8)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return [1, 2, [3, 4], 5]', function () {
    const source = [1, [2, [[3, 4], 5]], [6, [[7, 8], 9]]]
    const result = tailRecursiveFlatten(source, 8)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should return [1, 2, [[3, 4], 5], 6, [[7, 8], 9]]', function () {
    const source = [1, [2, [[3, 4], 5]], [6, [[7, 8], 9]]]
    const result = tailRecursiveFlatten(source, 1)
    expect(result).toEqual([1, 2, [[3, 4], 5], 6, [[7, 8], 9]])
  })
})