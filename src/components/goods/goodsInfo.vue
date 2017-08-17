<template>
    <section class="goodsinfo">
        <div class="mui-card">
            <div class="mui-card-header">{{ info.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="info.content">
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import config from "../../js/config.js";
import http from "../../js/cache/http.js"
export default {  
    data(){
        return {
            info:{}
        }
    },  
    props:["id"],
    methods:{
        getInfo(){
            let url = config + "/api/goods/getdesc/" + this.id;
            http.get(url,(resbody) => {
                this.info = resbody.message[0];
            })
            // this.$http.get(url).then((res) => {
            //     let resbody = res.body;
            //     if(resbody.status == 0){
            //         this.info = resbody.message[0];
            //     }
            // })
        }
    },
    created:function(){
        this.getInfo();
    }
}
</script>

<style lang="less">
    .goodsinfo {
        img {
            width: 100%;
        }
    }
</style>
