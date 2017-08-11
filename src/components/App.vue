<template>
    <section>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>  
    </section> 
</template>

<script>
import header from './home/header.vue';
import footer from './home/footer.vue';

export default {
    components:{
        'v-header':header,
        'v-footer':footer
    }
}
</script>

<style>

</style>


