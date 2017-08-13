import VueRouter from 'vue-router';
import index from '../components/index/index.vue';
import newslist from '../components/news/newslist.vue';
import newsdetails from '../components/news/newsdetails.vue';

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/news/list',component:newslist},
        {path:'/news/details/:id',component:newsdetails},
    ]
})