/* 手机号验证 */
export function validateMobilePhone(rule, value, callback) {
  if (!value) {
    callback(new Error('请输入手机号'))
  }
  else {
    if (value !== '') {
      const reg = /^1[3-9]\d{9}$/
      if (!reg.test(value))
        callback(new Error('请输入有效的手机号码'))
    }
    callback()
  }
}

export function isValidUrl(str) {
  const reg = new RegExp(
    '^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$',
    'i',
  ) // fragment locator
  return reg.test(str)
}
