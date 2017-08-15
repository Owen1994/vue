<template>
    <section>
        <v-title></v-title>
        
        <div class="mui-card">
            <div class="mui-card-header">{{ content.title }}</div>
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="(item,i) in pics" :key="i">
                    <img class="mui-media-object preview-img" :src="item.src" @click="$preview.open(i, pics)">
                </li>
            </ul>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="content.content"></div>
            </div>
            <div class="mui-card-footer">
                <span>{{ content.add_time | formatDate("YYYY-MM-DD") }}</span>
                <span>阅读量:{{ content.click }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import config from '../../js/config.js';
import title from "../common/title.vue";
export default {
    data(){
        return {
            pics:[],
            content:{}
        }
    },
    methods:{
        getPics(){
            let url = config + "/api/getthumimages/" + this.$route.params.imgid;
            this.$http.get(url).then(function(res){
                if(res.body.status == 0){
                    this.pics = res.body.message.map(function(val,index){
                        val.src = "http://ofv795nmp.bkt.clouddn.com/" + val.src;
                        val.w = 600;
                        val.h = 400;
                        return val;
                    })
                }
            })
        },
        getContent(){
            let url = config + "/api/getimageInfo/" + this.$route.params.imgid;
            this.$http.get(url).then(function(res){
                if(res.body.status == 0){
                    this.content = res.body.message[0];
                }
            })
        }
    },
    components:{
        "v-title":title
    },
    created(){
        this.getPics();
        this.getContent();
    }
}
</script>

<style>

</style>


