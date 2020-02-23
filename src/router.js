import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Detail from './pages/detail';

Vue.use(Router);

export default new Router({
    routes:[{
        path:'/',
        name:'home',
        component:Home,
        redirect:'/index',
        children:[{
            path:'/index',
            name:'index',
            component:Index
        },{
            path:'/detail',
            name:'detail',
            component:Detail
        }]
    }]
})