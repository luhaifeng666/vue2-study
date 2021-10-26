const Vue = require('vue')

const RulesPlugin = {
  install (Vue) {
    Vue.mixin({
      create() {
        // do something
      }
    })
  }
}