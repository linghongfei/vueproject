import Vue from 'vue'
import router from './router';
import Home from './pages/home';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home),
}).$mount('#app')
