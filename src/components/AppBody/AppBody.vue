<template>
    <main class="wrap">
        <div class="container">
            <div class="card__wrapper">
                <app-card v-for="(article, index) in ARTICLES" :key="index" :article="article"/>
            </div>
        </div>
    </main>
</template>

<script>
    import AppCard from "@/components/AppCard/AppCard";
    import { mapState } from 'vuex'
    export default {
        name: "AppBody",
        components: {AppCard},
        computed: {
            ...mapState(['ARTICLES'])
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>