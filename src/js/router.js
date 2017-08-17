import VueRouter from 'vue-router';
import index from '../components/index/index.vue';
import newslist from '../components/news/newslist.vue';
import newsdetails from '../components/news/newsdetails.vue';
import photolist from "../components/photo/photolist.vue";
import photodetails from "../components/photo/photodetails.vue";
import goodslist from "../components/goods/goodslist.vue";
import goodsdetails from "../components/goods/goodsdetails.vue";
import shopcartList from "../components/shopcart/list.vue";
import shopcartOrder from "../components/shopcart/order.vue";
import login from "../components/user/login.vue";

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        //新闻模块路由配置
        {path:'/news/list',component:newslist},
        {path:'/news/details/:id',component:newsdetails},
        //图片模块路由配置
        {path:'/photo/list',component:photolist},
        {path:'/photo/details/:imgid',component:photodetails},
        //商品模块路由配置
        {path:'/goods/list',component:goodslist},
        {path:'/goods/goodsdetails/:id',component:goodsdetails,name:'goodsD'},
        //购物车
        {path:'/shopcart/list/:ids',component:shopcartList,name:"shopcartList"},
        {path:'/shopcart/order',component:shopcartOrder,name:"shopcartOrder"},
        // 登录
        {path:'/login',component:login,name:"login"}
    ]
})