<template>
    <section class="photoListTitle">
        <v-title></v-title> 
        <ul>
            <li v-on:click="cli(item.id)" v-for="(item,i) in listTitle" :key="i">{{ item.title }}</li>
        </ul>
        <ul>
            <li v-for="(item,i) in listContent" :key="i">
                <div class="mui-card">
                    <router-link :to='"/photo/details/"+item.id'>
                        <div class="mui-card-header">
                            <img v-lazy="item.img_url" class="lazyimg">
                        </div>
                    </router-link>
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <p>{{item.title}}</p>
                            <p style="color: #333;">{{item.zhaiyao}}</p>
                        </div>
                    </div>
                    <div class="mui-card-footer">
                        <span>点赞</span>    
                        <a class="mui-card-link">收藏</a>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import config from '../../js/config.js';
import title from "../common/title.vue";
export default {
    data:function(){
        return {
            listTitle:[],
            listContent :[]
        }
    },
    methods:{
        getPhotoTitle(){
            let url = config + "/api/getimgcategory";
            this.$http.get(url).then(function(res){
                this.listTitle.push(...res.body.message);
            })
        },
        cli(id){
            let url = config + "/api/getimages/" + id;
            this.$http.get(url).then(function(res){
                if(res.body.status == 0){
                    this.listContent = res.body.message.map(function(val, index) {
                        val.img_url = "http://ofv795nmp.bkt.clouddn.com/" + val.img_url;
                        return val;
                    });
                }
            })
        }
    },
    components:{
        "v-title":title
    },
    created(){
        this.getPhotoTitle();
        this.cli(0);
    }
}
</script>

<style lang="less">
    .photoListTitle {
        ul {
            width: 100%;
            list-style: none;
            padding: 0;
            margin: 0;
            &::after {
                content: '';
                display: block;
                clear: both;
            }
            li {
                padding: 5px 10px;
                float: left;
            }
        }
        .mui-card-header > .lazyimg {
            width: 100%;
            height: 100%;
        }
    }
    
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>


