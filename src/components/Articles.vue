<template>
    <div class="allArticles">
        <div v-bind:key="article.id" v-for="article in articles">
            <ArticleItem v-bind:article="article" />
        </div>

        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <img src="../assets/image_article.jpg" alt="Image d'un fruit exotique et  rare" class="rounded-0"></img>
                </b-col>
                <b-col md="6">
                    <b-card-body v-bind:to="'/articles/'" title="Horizontal Card">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
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
