const { moduleExpression } = require("@babel/types")

// 判断传入的对象是否符合预期
function isObject (obj) {
  return typeof(obj) === 'object'
        && !Array.isArray(obj)
        && obj !== null
        && obj !== undefined
}

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