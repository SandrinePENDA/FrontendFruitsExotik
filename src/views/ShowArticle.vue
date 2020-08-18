<template>
    <div class="an-article">

        <AddArticle />
    <!--    <Articles />  -->
    </div>

</template>


<script>
import AddArticle from '@/components/AddArticle.vue'
//import Articles from '@/components/Articles.vue'


export default {
    name: 'ShowArticle',
    components: {
        AddArticle,
    //    Articles
    },

    methods: {
        createArticle(newArticle) {
            console.log(newArticle);
           // Simple POST request with a JSON body using fetch
         const addingArticle = {
           method: "POST",
        //   headers: { "Content-Type": "application/json", "Accept": "application/json"},
           headers: { "Content-Type": "application/json"},
           headers: { "Accept": "application/json"},
           body: JSON.stringify(newArticle),
        //   redirect: 'follow'
         };
         fetch("http://localhost:8000/api/articles", addingArticle)
         .then(response => this.articles = [...this.articles, response.newArticle])
         .then(data => (this.newArticle = data.id))
         .catch(err => console.log(err));
    /*
         .then(response => response.json())
         .then(result => this.validation=result['message'])
         .catch(error => console.log('error', error));
    */
       }
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

<style lang="css" scoped>
</style>
