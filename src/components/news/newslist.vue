<template>
    <section>
        <newstitle :title="title"></newstitle> 
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/news/details/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="content">
                        <p class='title'>{{ item.title }}</p>     
                        <p class="time">
                            <span>发表日期:{{item.add_time | formatDate("YYYY-MM-DD")}}</span>
                            <span>点击量:{{ item.click }}</span>
                        </p> 
                    </div>
                </router-link>
            </li>
        </ul> 
    </section> 
</template>

<script>
import config from '../../js/config.js';

import newstitle from '../common/title.vue';

export default {
    data(){
        return {
            list:[],
            title:"新闻资讯"
        }
    },
    methods:{
        getnewslist(){
            this.$http.get(config+"/api/getnewslist").then(function(res){
                res.body.status == 0 && (this.list = res.body.message);
            })
        }
    },
    created:function(){
        this.getnewslist();
    },
    components:{
        "newstitle":newstitle
    }
}
</script>

<style lang="less">
    
    .content {
        .time {
            span {
                display: inline-block;
                width: 50%;
            }
        }
        .title {
            font-size: 16px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>


