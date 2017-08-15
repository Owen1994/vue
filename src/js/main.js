//引入第三方包
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VuePreview from 'vue-preview';

//mint-ui插件
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

//mui插件
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';

//自己的包
import renderdata from '../components/App.vue';
import router from './router.js';
import filter from './filter.js';
Vue.use(filter);

//js插件需要usep
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(VuePreview);


var vm = new Vue({
    el:"#app",
    render:function(c){
        return c(renderdata);
    },
    router:router
})