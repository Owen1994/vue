<template>
    <section class="newstitle">
        <header class="mint-header">
            <div class="mint-header-button is-left">
                <button class="mint-button mint-button--default mint-button--normal" v-on:click='cli'>
                    <span class="mint-button-icon"><i class="mintui mintui-back"></i></span> 
                    <label class="mint-button-text">返回</label>
                </button>
            </div> 
            <h1 class="mint-header-title" v-html="title"></h1> 
            <div class="mint-header-button is-right">
                <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon"><i class="mintui mintui-more"></i></span> 
                    <label class="mint-button-text"></label>
                </button>
            </div>
        </header>
    </section> 
</template>

<script>
export default {
    props:["title"],
    methods:{
        cli(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>
    .newstitle .mint-header {
        background-color:#fff;
        color: #000;
    }
</style>


