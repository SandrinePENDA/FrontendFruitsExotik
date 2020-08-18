<template>
    <div class="ListArticles">
    <!--    <Articles v-bind:articles="articles" />  -->
        <Articles v-for="article in articles" :key="article.id" :mini_title="article.title" :mini_photo_fruit="article.photo_fruit"  :mini_country_fruit="article.country_fruit"></Articles>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img src="./assets/image_article.jpg" alt="Image d'un fruit exotique et  rare" class="rounded-0"></b-card-img>
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
import Articles from '@/components/Articles.vue'


export default {
  name: 'AllArticles',
  components: {
      Articles
  },
  data() {
    return {
        articles: {}
    }
},

beforeMount(){

},

methods :{


},

    created() {
       // GET request using fetch with set headers
       var myHeaders = new Headers();
       myHeaders.append("Accept", "application/json");
       myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8000/api/articles?_limit=10", { myHeaders })
      .then(response => response.json())
      .then(data => (this.articles = data.articles));
    }

}

</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: Arial, sans-serif;
        line-height: 1.4;
    }
    .btn {
    /*    background: #7FFF00;


    */
        display:inline-block;
        border: solid #006400 2px;
        border-radius: 5px;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }
    .btn:hover {
        background: #666;
    }
</style>
