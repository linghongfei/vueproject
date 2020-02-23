import Vue from 'vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Home from './pages/home';
import env from './env';

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timout = 8000; //请求时间8秒。
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){ //返回正确
    return res.data;
  }else if(res.status == 10){ //未登录
    window.location.href = '/#/login'; //跳转到登录页面
  }else{
    alert(res.msg); //弹出错误信息
  }
});

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home),
}).$mount('#app')
