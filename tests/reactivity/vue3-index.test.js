const convert = require('../../reactivity/vue3-index')

test('vue3 reactivity', () => {
  const obj = {}
  const _obj = convert(obj)
  _obj.a = 1
  expect(obj.a).toEqual(_obj.a)
})