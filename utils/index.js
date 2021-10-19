/**
 * 判断传入的对象是否为对象
 * @param {Object} obj 
 * @returns Boolean
 */
function isObject (obj) {
  return typeof(obj) === 'object'
        && !Array.isArray(obj)
        && obj !== null
        && obj !== undefined
}

module.exports = {
  isObject
}