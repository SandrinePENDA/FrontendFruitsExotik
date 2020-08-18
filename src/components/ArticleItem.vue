<template>
    <div class="article-item">
        <strong><p>
            {{ article.title }}: {{ article.country_fruit }}
        </p></strong>
    </div>
</template>

<script>
export default {
    name: "ArticleItem",
    props: ["article"]
}
</script>

<style scoped>
    .article-item {
        background-color: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
</style>
