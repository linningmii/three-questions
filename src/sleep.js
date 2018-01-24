module.exports = function sleep(wait) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, wait)
  })
}