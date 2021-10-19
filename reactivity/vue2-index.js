const { isObject } = require('../utils/index')

const obj = {a: 1}
convert(obj)
// delete obj.a
obj.a

function convert(obj) {
  if (!isObject(obj)) throw new TypeError('请传入对象')

  Object.keys(obj).forEach(key => {
    // 因为obj[key]会被使用3次，所以抽成变量了
    let objVal = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        console.log(`getting key "${key}": ${objVal}`)
        return objVal
      },

      set(newVal) {
        console.log(`setting key "${key}" to: ${newVal}`)
        objVal = newVal
      }
    })
  })
}

module.exports = convert