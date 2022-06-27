<template>
    <section class="filter__wrap">
        <app-select :AUTHORS="AUTHORS"/>
    </section>
</template>

<script>
    import AppSelect from "@/components/AppSelect/AppSelect";
    import { mapState } from 'vuex'
    export default {
        name: "StickyFilter",
        components: {AppSelect},
        computed: {
            ...mapState(['AUTHORS'])
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>