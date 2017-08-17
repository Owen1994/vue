<template>
  <article class="shopcart-list">

    <!-- 商品列表 -->
    <div class="goods" v-for="(item,i) in shopcartList" :key="i">
      <mt-switch class="switch" v-model="item.selected"></mt-switch> <img class="img" :src="item.src">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{ item.title }}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{ item.sell_price }}</li>
            <li>
                <v-numbox :goodsNum="getInitVal(item.id)" @getChange="getNum(item.id,$event)"></v-numbox>
            </li>
            <li>
                <a href="javascript:void(0)" v-on:click="remove(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品{{ totalNum }}件,总价:￥{{ totalPrice }}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary">付 款</mt-button>
      </div>
    </div>

  </article>
</template>

<script>
import config from "../../js/config";
import numBox from "../common/numberBox.vue";
import numById from "../../js/common/goodsNum";
export default {
    data(){
        return {
            ids:this.$route.params.ids,
            shopcartList:[]
        }
    },
    methods:{
        getShopcartList(){
            this.$http.get(config+"/api/goods/getshopcarlist/"+this.ids).then((res) => {
                let resbody = res.body;
                if(resbody.status == 0){
                    this.shopcartList = resbody.message.map((val,index) => {
                        val.src = "http://ofv795nmp.bkt.clouddn.com/" + val.thumb_path;
                        val.selected=true;
                        return val;
                    })
                }
            })
        },
        getInitVal(id){
            return numById.get(id);
        },
        getNum(id,num){
            numById.set(id,num);
            this.shopcartList[0].selected = !this.shopcartList[0].selected;
            this.shopcartList[0].selected = !this.shopcartList[0].selected;
        },
        remove(id){
            numById.remove(id);
            let delIndex = this.shopcartList.findIndex(item => item.id == id);
            delIndex > -1 && this.shopcartList.splice(delIndex, 1);
        }
    },
    computed:{
        totalNum(){
            let len = this.shopcartList.length;
            let sum = 0;
            len && this.shopcartList.forEach((val,index) => {
                if(val.selected){
                    sum += numById.get(val.id);
                }
            })
            return sum;
        },
        totalPrice(){
            let selectArr = this.shopcartList.map((val,index) => val.selected?numById.get(val.id)*val.sell_price:0);
            return selectArr.length && selectArr.reduce((v1,v2) => v1+v2);
        }
    },
    created(){
        this.getShopcartList();
    },
    components:{
        "v-numbox":numBox
    }
}

</script>

<style lang="less">
  .shopcart-list {
    .goods {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      height: 102px;
      display: flex;
      padding: 5px;
      .switch {
        flex: 0 0 52px;
      }
      .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
      }
      .inforight {
        margin-left: 5px;
        flex: 1;
      }
      .inforight ul {
        padding-left: 0px;
      }
      .inforight li {
        list-style: none;
        display: inline-block;
      }
      .inforight h4 {
        color: #0094ff;
        font-size: 14px;
      }
      .bottom li:first-child {
        color: red;
        margin-right: 5px;
      }
      .bottom li:last-child {
        margin-left: 5px;
      }
    }
    .total {
      height: 84px;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 5px 14px;
      ul {
		    padding-left: 0px;
		    margin: 14px 0;
		    li {
		      list-style: none;
		      font-size: 14px;
		    }
		  }
		  &_val {
		  	flex: 1;
		  }
		  &_btn {
		  	flex: 0 0 60px;
	      margin: 18px 0 0 0;
		  }
    }
  }
</style>