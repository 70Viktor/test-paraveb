<template>
    <main class="wrap">
        <div class="container">
            <sticky-filter/>
            <section class="card__wrapper">
                <app-card v-for="(article, index) in filteredArticles" :key="index" :article="article"/>
            </section>
        </div>
    </main>
</template>

<script>
    import AppCard from "@/components/AppCard/AppCard";
    import { mapState } from 'vuex'
    import StickyFilter from "@/components/StickyFilter/StickyFilter";
    export default {
        name: "AppBody",
        components: {StickyFilter, AppCard},
        computed: {
            ...mapState(['ARTICLES', 'selectedAUTHOR']),
            filteredArticles() {
                if (this.selectedAUTHOR === '') {
                    return this.ARTICLES
                } else {
                    return this.ARTICLES.filter(article => article.author === this.selectedAUTHOR)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>