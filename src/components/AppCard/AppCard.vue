<template>
    <article class="card">
        <time class="card__date">{{ date }}</time>
        <div class="card__title" :title="article.title">
            <h2 class="card__title--truncated">
                {{ article.title }}
            </h2>
        </div>
        <div class="card__description" :title="article.description">
            <p class="card__description--truncated">
                {{ article.description }}
            </p>
        </div>
        <a
                v-show="article.author !== null"
                href="#"
                class="card__author"
        @click.prevent="selectAUTHOR">{{ article.author }}</a>
    </article>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "AppCard",
        props: {
            article: Object
        },
        computed: {
            date() {
                return (new Date(this.article.publishedAt))
                    .toUTCString()
                    .split(' ')
                    .slice(1,4)
                    .join(' ')
            }
        },
        methods: {
            ...mapMutations(['SELECT_AUTHOR']),
            selectAUTHOR() {
                this.SELECT_AUTHOR(this.article.author)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>