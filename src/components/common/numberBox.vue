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
    //每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop
    //故设置一个变量num
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

