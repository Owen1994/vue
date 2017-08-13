<template>
    <section class="details">
        <detail-title :title="title"></detail-title>
        <div class="mui-card">
            <div class="mui-card-header">{{ list.title }}</div>
            <div class="mui-card-footer">
                <p>创建时间:{{ list.add_time | formatDate("YYYY-MM-DD") }}</p>
                <p>点击量:{{ list.click }}</p>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="list.content">

                </div>
            </div>
        </div>
    </section> 
</template>

<script>
import title from "../../components/common/title.vue";
import config from '../../js/config';
export default {
    data(){
        return {
            list:{},
            title:"资讯详情"
        }
    },
    methods:{
        getdetails(){
            this.$http.get(config + '/api/getnew/' + this.$route.params.id).then(function(res){
                res.body.status == 0 && (this.list = res.body.message[0]);
            });
        }
    },
    created:function(){
        this.getdetails();
    },
    components:{
        "detail-title":title
    }
}
</script>

<style lang="less">
    .details {
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>


