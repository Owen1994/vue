//引入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';

//自己的包
import renderdata from '../components/App.vue';
import router from './router.js';

Vue.use(VueRouter);

var vm = new Vue({
    el:"#app",
    render:function(c){
        return c(renderdata);
    },
    router:router
})