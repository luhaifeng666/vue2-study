const { expect } = require('@jest/globals')
const convert = require('../../reactivity/vue2-index')

test('get attribute', () => {
  const target = {}
  convert(target)
  target.a = 1
  expect(target.a).toEqual(1)
})