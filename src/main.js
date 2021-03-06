import Vue from 'vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
// import env from './env';
import './assets/scss/reset.scss';
import './assets/scss/config.scss';

// mock 开关
const mock = true;
if(mock){
  require('./mock/api'); //执行的时候才加载，import是预编译的。
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; //请求时间8秒。
//根据环境变量获取不同的接口地址
// axios.defaults.baseURL = env.baseURL;
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
  render: h => h(App),
}).$mount('#app')
