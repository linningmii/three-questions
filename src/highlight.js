/**
 * {target: string | RegExp, class: string} | Array<{target: string | RegExp, class: string}>
 * @param options
 * @return void
 */
function highlight (options) {
  // 假设有this指向目标元素DOM
  const elm = this

  let result = elm.innerHTML
  // 约定多个高亮目标时按传入数组顺序进行高亮优先级
  const highlightOptions = [].concat(options)
  highlightOptions.forEach(option => {
    let target = option.target

    if (typeof target === 'string') {
      // 转译高亮目标, 避免需要高亮的内容干扰html语法
      if (target.indexOf('<') > -1) {
        target = target.replace(new RegExp('<', 'g'), '&lt;')
      }

      if (target.indexOf('>') > -1) {
        target = target.replace(new RegExp('>', 'g'), '&gt;')
      }
    }

    const reg = target instanceof RegExp ? target : new RegExp(target, 'g')
    // 将需要被高亮的内容用span标签包裹并添加对应样式
    result = result.replace(reg, `<span class="${option.class}">${option.replacement}</span>`)
  })
  elm.innerHTML = result
}