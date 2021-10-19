class Dep {
  constructor() {
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