//引入第三方包
import Vue from 'vue';


//自己的包
import renderdata from '../components/App.vue';


var vm = new Vue({
    el:"#app",
    render:function(c){
        return c(renderdata);
    }
})