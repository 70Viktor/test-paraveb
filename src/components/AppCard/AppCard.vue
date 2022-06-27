<template>
    <article class="card">
        <date class="card__date">{{ date }}</date>
        <div class="card__title">
            <h2 class="card__title--truncated">
                {{ article.title }}
            </h2>
        </div>
        <div class="card__description">
            <p class="card__description--truncated">
                {{ article.description }}
            </p>
        </div>
        <a v-show="article.author !== null" href="#" class="card__author">{{ article.author }}</a>
    </article>
</template>

<script>
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
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>