<template>
    <section class="carousel">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,i) in pics" :key="i">  
                <img :src="item.src">
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
            this.$http.get(config+"/api/getthumimages/"+this.$route.params.id).then(function(res){
                if(res.body.status == 0){
                    this.pics = res.body.message.map(function(val,index){
                        val.src = "http://ofv795nmp.bkt.clouddn.com/" + val.src;
                        return val;
                    });
                }
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
        height: 300px;
        img {
            width: 100%;   
            height: 100%;  
        }
    }
</style>


