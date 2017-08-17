<template>
    <section class="footer">
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#/index">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" :href="'#/shopcart/list/'+shopcartId">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{ total }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
    </section> 
</template>

<script>
import goodsById from "../../js/common/goodsNum.js";
export default {
    data(){
		return {
			shopcartId:goodsById.getIdList().toString(),
			total:goodsById.get()
		}
	}
}
</script>

<style lang="less">
	.footer {
		height: 50px;
	}
</style>


