<template>
    <section class="goodslist">
        <v-title :title="title"></v-title>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,i) in goodslist" :key="i">
                <router-link :to="{name:'goodsD',params:{id:item.id}}">
                    <img class="mui-media-object" :src="item.img_url"> 
                    <div class="mui-media-body">{{ item.title }}</div>
                    <div class="info">
                        <div class="price">
                            <strong style="color:red">￥{{ item.sell_price }}</strong>
                            <del style="font-size:14px">￥{{ item.market_price }}</del>
                        </div>
                        <span class="hot">热卖中</span>
                        <span class="left">剩<strong>{{ item.stock_quantity }}</strong>件</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import title from "../common/title.vue";
import config from "../../js/config";

export default {
    data(){
        return {
            title:"商品列表",
            pagenumber:1,
            goodslist:[]
        }
    },
    methods:{
        getGoodslist(){
            let url = config + "/api/getgoods?pageindex=" + this.pagenumber;
            this.$http.get(url).then(function(res){
                if(res.body.status == 0){
                    this.goodslist = res.body.message;
                }
            })
        }
    },
    components:{
        "v-title":title
    },
    created(){
        this.getGoodslist();
    }
}
</script>

<style lang="less">
    .goodslist {
        ul.mui-table-view {
            padding: 0;
            li.mui-media {
                margin: 0;
                margin-bottom: 5px;
                border:1px solid #ccc;
                padding: 0;
                .info {
                    background-color: rgb(240, 240, 240);
                    &::after {
                        content: '';
                        display: block;
                        clear: both;
                    }
                    .price {
                        margin-top: 10px;
                    }
                    .hot {
                        font-size: 14px;
                        margin-left: 20px;
                        float:left;
                    }
                    .left {
                        font-size: 14px;
                        float: right;
                        margin-right: 20px;
                    }
                }
            }
        }
    }
</style>


