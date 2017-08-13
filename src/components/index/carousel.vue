<template>
    <section class="carousel">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,i) in pics" :key="i">  
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </section> 
</template>

<script>
import config from '../../js/config.js';

export default {
    data(){
        return {
            pics:[]
        }
    },
    methods:{
        getcarousel(){
            this.$http.get(config+"/api/getlunbo").then(function(res){
                res.body.status == 0 && (this.pics = res.body.message);
            })
        }
    },
    created:function(){
        this.getcarousel();
    }
}
</script>

<style lang="less">
    .carousel {
        height: 200px;
        img {
            width: 100%;
            height: 100%;        
        }
    }
</style>


