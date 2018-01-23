module.exports = function flatten (arr, depth = Infinity) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Not an array')
  }

  if (depth === 0) {
    return arr
  }

  if (arr.some(item => Array.isArray(item))) {
    return flatten([].concat(...arr), depth - 1)
  }

  return arr
}

