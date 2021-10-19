const { isObject } = require('../utils/index')

function convert (obj) {
  if(!isObject(obj)) throw new TypeError('请传入正确的对象')

  return new Proxy(obj, {
    get (target, proxyKey, receiver) {
      console.log(`getting key "${proxyKey}": ${target[proxyKey]}`)
      return Reflect.get(target, proxyKey, receiver)
    },

    set (target, proxyKey, value, receiver) {
      console.log(`setting key "${proxyKey}" to: ${value}`)
      return Reflect.set(target, proxyKey, value, receiver)
    },

    deleteProperty (target, proxyKey, receiver) {
      console.log(`delete key "${proxyKey}": ${target[proxyKey]}`)
      return Reflect.deleteProperty(target, proxyKey, receiver)
    }
  })
}

module.exports = convert