<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" v-on:click="minus">-</button>
        <input class="mui-input-numbox" type="number" :value="this.num">
        <button class="mui-btn mui-btn-numbox-plus" v-on:click="add">+</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:this.goodsNum
        }
    },
    props:["goodsNum"],
    methods:{
        minus(){
            this.num && this.num--;
        },
        add(){
            this.num++;
        }
    },
    watch:{
        num(){
            this.$emit("getChange",this.num);
        }
    }
}
</script>

