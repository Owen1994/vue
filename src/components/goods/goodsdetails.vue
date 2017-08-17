<template>
  <article class="goods-detail">
    <v-title :title="title"></v-title>
    <v-swipe></v-swipe>
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{ info.title }}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:{{ info.market_price }}</s> <span>销售价: </span> <em>￥{{ info.sell_price }}</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <v-numberbox :goodsNum="sendVal" @getChange="numChange"></v-numberbox>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<router-link :to="'/shopcart/list/'+shopcartId" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</router-link>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" @click="addToShopcart">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		  <mt-navbar v-model="selectTab">
			  <mt-tab-item id="comment">商品评论</mt-tab-item>
			  <mt-tab-item id="introduce">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
		  <mt-tab-container v-model="selectTab">
			  <mt-tab-container-item id="comment">
			    <v-comment :id="id"></v-comment>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="introduce">
			    <v-introduce :id="id"></v-introduce>
			  </mt-tab-container-item>
			</mt-tab-container> 
		</div>

  </article>
</template>

<script>
    import config from "../../js/config";
    import title from "../common/title.vue";
    import swipe from "../goods/swipe.vue";
    import comment from "../common/comment.vue";
    import introduce from "./goodsInfo.vue";
    import numberBox from "../common/numberBox.vue";
    import numById from "../../js/common/goodsNum";
    export default {
        data(){
            return {
              title:'商品详情',
              info:{},
              selectTab:'introduce',
              id:this.$route.params.id,
              sendVal:numById.get(this.$route.params.id),
              shopcartId:numById.getIdList().toString()
            }
        },
        methods:{
            getInfo(){
                this.$http.get(config+"/api/goods/getinfo/"+this.id).then(function(res){
                    if(res.body.status == 0){
                        this.info = res.body.message[0];
                    }
                })
            },
            numChange(v){
              this.sendVal = v;
            },
            addToShopcart(){
              numById.set(this.id,this.sendVal);
              document.querySelector(".mui-badge").innerHTML = numById.get();
            }
        },
        created:function(){
          this.getInfo();
        },
        components:{
            "v-title":title,
            "v-swipe":swipe,
            "v-comment":comment,
            "v-introduce":introduce,
            "v-numberbox":numberBox
        }
    }
</script>


<style lang="less">
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
</style>