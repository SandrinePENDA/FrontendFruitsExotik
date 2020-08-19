<template>
    <div class="allArticles">
        <div v-bind:key="article.id" v-for="article in articles">
            <ArticleItem v-bind:article="article" />
        </div>
    </div>
</template>

<script>
import ArticleItem from "./ArticleItem.vue";

export default {
    name: "Articles",
    components: {
        ArticleItem
    },
    props: ["articles"]

}
</script>

<style lang="css" scoped>
</style>
