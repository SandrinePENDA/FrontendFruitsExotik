<template>
    <div class="">
        <div v-for="item in allArticles" :key="item.id" :title="item.title" :photo_fruit="item.photo_fruit" :country_fruit="item.country_fruit" :created_at="item.created_at">
            <h4>
                <img src="../assets/image_article.jpg" alt="photo d'un fruit exotique" style="width: 200px;height=200px">
                {{ item.title }}
            </h4>
            <p>
                {{ item.photo_fruit }}
            </p>
            <p>
                {{ item.country_fruit }}<br>
                Mini-Article créé le :{{ item.created_at }}
            </p>
        </div>
    </div>

</template>


<script>


export default {
  name: 'AllArticles',
  data() {
    return {
        allArticles: []
    }
},
    created() {
       // GET request using fetch with set headers
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:8000/api/articles", requestOptions)
    .then(response => response.json())
    .then(data => (this.allArticles = data.allArticles))
    .catch(error => console.log('error', error));
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
