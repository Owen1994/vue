<template>
    <section>
        <v-title :title="title"></v-title>
    </section>
</template>

<script>
import title from "../common/title.vue";
export default {
    data(){
        return {
            title:"商品结算"
        }
    },
    components:{
        "v-title":title
    }

}
</script>

<style>

</style>


