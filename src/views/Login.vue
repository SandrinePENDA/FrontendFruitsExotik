    <template>
        <div class="">
            <h1>Connectez-vous à votre compte</h1>
                <input
                    type="text"
                    name="name"
                    v-model="name"
                    placeholder="Ecrire votre pseudo"
                />

                <input
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="Ecrire votre mot de passe"
                />

                <button
                    type="submit"
                    v-on:click="this.loginValidation"

                >OK</button>
            <div class=" mt-6">
              Pas encore membre ?
              <router-link class="text-green-600" to='/register'>Je m'inscris</router-link><br>
          </div><br>
            <div v-html="validation"></div>
        </div>
    </template>

    <script>
//    import index from '../router/index.js'; // pour la redirection vers l'espace membre
    export default {
        data() {
            return {
                name: "",
                password: "",
                token: "",
                validation: ""
            }
        },

        methods: {
            loginValidation() {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json", "Access-Control-Allow-Origin", "*");

                var raw = JSON.stringify({"name":this.name,"password":this.password});

                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };

            fetch("http://localhost:8000/api/login", requestOptions)
              .then(response => response.json())
              .then(result => {console.log(result); this.token=result['token_type']; this.validation=result['message']})
            //  .then(() =>{this.$router.push({ name: "MySpace"})}) // pour rediriger vers l'espace membre.
              .catch(error => console.log('error', error));
          }
      }
    }
    </script>

    <style lang="css" scoped>
    </style>
