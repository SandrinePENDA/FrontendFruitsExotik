<template>
  <div class="register mb-24">
    <!-- component -->
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h3 class="mb-8 text-3xl text-center">Parlez-nous de ce fruit que vous avez découvert !</h3>
                <input
                  style="width:28em;text-align:center"
                  type="text"
                  name="title"
                  v-model="title"
                  placeholder="Titre contenant le nom du fruit"
                /><br><br>

                <input class="photo_fruit"
                  type="file"
                  name="photo_fruit"
                  v-on="photo_fruit"
                /><br><br>

                <input
                  style="width:28em;text-align:center"
                  type="text"
                  name="country_fruit"
                  v-model="country_fruit"
                  placeholder="Indiquez dans quel pays vous avez connu ce pays."

                /><br><br>

                <input
                  style="width:28em;text-align:center"
                  type="text"
                  name="how_eating"
                  v-model="how_eating"
                  placeholder="Comment ce fruit est-il consommé ?"
                /><br>

                <input
                  style="width:28em;text-align:center"
                  type="text"
                  name="buying_place"
                  v-model="buying_place"
                  placeholder="Lieu d'achat en France"
                /><br><br>

                <textarea
                  type="text"
                  name="more_infos"
                  v-model="more_infos"
                  placeholder="Racontez-nous votre rencontre (découverte) avec ce fruit :) Que faut-il absolument savoir ?"
                  rows="20"
                  cols="60"
                ></textarea><br><br>

                <button
                  type="submit"
                  v-on:click="this.createArticle"
                >Je publie
                </button>

            <div v-html="validation"></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'AddArticle',
        data() {
            return {
                title : "",
                photo_fruit: "",
                country_fruit: "",
                buying_place: "",
                how_eating: "",
                more_infos: "",
                validation: ""
            }
        },

        methods: {
            createArticle(){
                console.log("Je vois ce message car la fonction createArticle est appelée")
              var myHeaders = new Headers();
              myHeaders.append("Accept", "application/json");
              myHeaders.append("Content-Type", "application/json");
              var raw = JSON.stringify({
                    "title":this.title,
                    "photo_fruit":this.photo_fruit,
                    "country_fruit":this.country_fruit,
                    "buying_place":this.buying_place,
                    "how_eating":this.how_eating,
                    "more_infos":this.more_infos});
                    
              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
              };

              fetch("http://localhost:8000/api/articles", requestOptions)
                .then(response => response.json())
                .then(result => this.validation=result['message'])
                .catch(error => console.log('error', error));
            }
        }
    }

</script>
