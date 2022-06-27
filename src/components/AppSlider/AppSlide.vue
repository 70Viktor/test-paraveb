<template>
    <vue-carousel class="slider" :data="data"></vue-carousel>
</template>

<script>
    import AppSlide from "@/components/AppSlide/AppSlide";
    import {markRaw} from 'vue'
    export default {
        name: "AppSlide",
        components: {AppSlide},
        template: markRaw(AppSlide),
        data() {
            return {
                data: [
                    AppSlide,
                    AppSlide,
                    AppSlide
                ],
            }
        },
    }
</script>

<style lang="scss">
    @use "style";
</style>