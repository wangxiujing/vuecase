import Vue from 'vue'
import App from './App.vue'
import router from './routers'/*方便模块化管理，路由也设置文件夹*/
import store from './stores'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')