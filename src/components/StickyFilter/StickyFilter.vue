<template>
    <section class="filter__wrap">
        <app-select class="filter__item" :AUTHORS="AUTHORS"/>
        <app-set-date class="filter__item"/>
    </section>
</template>

<script>
    import AppSelect from "@/components/AppSelect/AppSelect";
    import { mapState } from 'vuex'
    import AppSetDate from "@/components/AppSetDate/AppSetDate";
    export default {
        name: "StickyFilter",
        components: {AppSetDate, AppSelect},
        computed: {
            ...mapState(['AUTHORS'])
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>