<!--
<template>
  <div class="listPokemon">
    <router-link class="" v-bind:to="'/pokemons/'+list_mini.title">
      <div class="w-auto flex justify-between border-2">

        <div id="block gauche" class="flex justify-between items-center">
          <div class="w-16 my-2 ml-2 mr-10">
            <img :src="require(`../assets/pokemon_image/${list_poke.img_pok}`)" alt="img_poke"/>
          </div>
          <div>
            <p>{{list_poke.nom_pok}}</p>
            <p class="text-gray-500">#{{list_poke.id_pok}}</p>
          </div>
        </div>
        <div id="block droite" class="flex justify-between items-center" >
          <div class=""><img :src="require(`../assets/icone/${list_poke.type1}.png`)" alt="icone_type1"/></div>
          <div class="ml-2" v-if="list_poke.type2.length >2 "><img :src="require(`../assets/icone/${list_poke.type2}.png`)" alt="icone_type2"/></div>
        </div>

      </div>
    </router-link>
  </div>
</template>
-->
<template>
    <div class="ListArticles">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img src="https://localhost:8000/api/articles/`${list_mini.photo_fruit}`" alt="Image" class="rounded-0"> </b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body v-bind:to="'/articles/'+list_mini.title" title="Horizontal Card">
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
export default {
  name: 'ListArticles',
  data (){
    return {

    }
  },
  props: {
    list_mini : {
      type : Object,
    }
  },

  methods : {


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
