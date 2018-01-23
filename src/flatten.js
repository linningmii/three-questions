module.exports = function flatten (arr, depth = Infinity) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Not an array')
  }

  const result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      depth > 0 ? result.push(...flatten(item, depth - 1)) : result.push(item)
    } else {
      result.push(item)
    }
  })
  return result
}