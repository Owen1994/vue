<template>
    <div class="mui-card">
	<div class="mui-card-header">提交评论</div>
    <textarea v-model="content" id="textarea" rows="5" placeholder="多行文本框"></textarea>
	<button v-on:click="sendComment" type="button" class="mui-btn mui-btn-primary mui-btn-block">提交</button>
    <div class="mui-card">
        <div class="mui-card-header">评论列表</div>
        <div class="mui-card-content">
            <ul class="mui-table-view">
				<li class="mui-table-view-cell" v-for="(item,i) in list" :key="i">
                    <span>{{ item.user_name }}</span>
                    <span>{{ item.add_time | formatDate("YYYY-MM-DD")}}</span>
                    <p>{{ item.content }}</p>
                </li> 
			</ul>
        </div>
    <button v-on:click="getComment" type="button" class="mui-btn mui-btn-primary mui-btn-block" v-bind:disabled="isDisabled">加载更多</button>
    </div>
</div>
</template>

<script>
import config from "../../js/config";
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            content:'',
            pageindex:1,
            list:[],
            isDisabled:false
        }
    },
    props:["id"],
    methods:{
        sendComment(){
            let url = config + "/api/postcomment/" + this.id;
            let data = {content:this.content};
            this.$http.post(url,data,{emulateJSON:true}).then(function(res){
                if(res.body.status == 0){
                    this.list.unshift({
                        user_name:'yeah',
                        add_time:new Date(),
                        content:this.content
                    })
                    Toast({
                        message: '操作成功',    
                        iconClass: 'icon icon-success'
                    });
                    this.content = "";
                }
            })
        },
        getComment(){
            let url = `${ config }/api/getcomments/${this.id}?pageindex=${this.pageindex}`;
            this.$http.get(url).then(function(res){
                if(res.body.status == 0 && res.body.message.length > 0){
                    this.list.push(...res.body.message);
                    this.pageindex++;
                }else if(res.body.message.length == 0){
                    this.isDisabled = true;
                }
            })
        }
    },
    created(){
        this.getComment();
    }
}
</script>

<style>

</style>


