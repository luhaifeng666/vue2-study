const { isObject } = require('../utils/index')

class Convert {
  constructor () {
    this.depList = new Set()
  }

  depend () {
    if (depFunction) this.depList.add(depFunction)
  }

  nodify () {
    this.depList.forEach(dep => dep())
  }
}

// 用于存储需要收集的依赖
let depFunction = null


function observe(obj) {
  if (!isObject(obj)) throw new TypeError('This is not an object')

  const convert = new Convert()

  Object.keys(obj).forEach(key => {
    let val = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        console.log('///get///')
        convert.depend()
        return val
      },
      set (newVal) {
        console.log('///set///')
        val = newVal
        convert.nodify()
      }
    })
  })
}

function autorun(fn) {
  function warp() {
    depFunction = fn
    fn()
    depFunction = null
  }
  warp()
}

const state = {
  count: 0
}

observe(state)

autorun(() => {
  console.log(state.count)
})

state.count += 1
