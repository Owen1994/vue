<template>
    <section>
        <vue-carousel></vue-carousel>
        <vue-nav></vue-nav>
    </section> 
</template>

<script>
import ico_nav from './icon_nav.vue';
import carousel from './carousel.vue';

export default {
    components:{
        "vue-carousel":carousel,
        "vue-nav":ico_nav
    }
}
</script>

<style>

</style>


