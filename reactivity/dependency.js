class Dep {
  constructor() {
    // 这边用new Set可以有效的防止重复收集依赖
    this.depList = new Set()
  }

  depend () {
    if (warpperHandler) this.depList.add(warpperHandler)
  }

  nodify () {
    this.depList.forEach(item => item())
  }
}

let warpperHandler
function autoRun(update) {
  // 这么写的目的是依赖收集的时候，确保代码是最新的
  function warpper () {
    warpperHandler = warpper
    update()
    warpperHandler = null
  }
  warpper()
}

const dep = new Dep()

autoRun(() => {
  dep.depend()
  console.log('update')
})

// should log: update
dep.nodify()