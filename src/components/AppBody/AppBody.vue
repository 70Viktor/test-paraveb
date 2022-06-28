<template>
    <main class="wrap">
        <div class="container">
            <sticky-filter/>
            <section class="card__wrapper" v-if="filteredArticlesAuthorAndDate.length > 0">
                <app-card class="card__wrapper--item" v-for="(article, index) in filteredArticlesAuthorAndDate" :key="index" :article="article"/>
            </section>
            <h2 class="message" v-else>Ничего не нашлось :( <br>Попробуйте изменить параметры фильтрации</h2>
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
            ...mapState(['ARTICLES', 'selectedAUTHOR', 'DATE_FROM', 'DATE_TO']),
            filteredArticlesAuthor() {
                if (this.selectedAUTHOR === '') {
                    return this.ARTICLES
                } else {
                    return this.ARTICLES.filter(article => article.author === this.selectedAUTHOR)
                }
            },
            filteredArticlesAuthorAndDate() {
                return this.filteredArticlesAuthor.filter(article => {
                    return (
                        this.DATE_FROM === '' && this.DATE_TO === '' ||
                        this.DATE_FROM === '' && new Date (article.publishedAt) < new Date (this.DATE_TO) ||
                        this.DATE_TO === '' && new Date (article.publishedAt) > new Date (this.DATE_FROM) ||
                        new Date (article.publishedAt) > new Date (this.DATE_FROM) && new Date (article.publishedAt) < new Date (this.DATE_TO)
                    )
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>