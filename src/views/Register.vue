    <template>
      <div class="container p-4">
        <!-- component -->
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                  <h1 class="mb-8 text-3xl text-center">Devenez membre !</h1>
                    <input
                      style="width:28em;text-align:center"
                      type="text"
                      name="name"
                      v-model="name"
                      placeholder="Choisissez un Pseudo"
                    /><br><br>

                    <input
                      style="width:28em;text-align:center"
                      type="text"
                      name="email"
                      v-model="email"
                      placeholder="Entrez votre Email"
                    /><br><br>

                    <input
                      style="width:28em;text-align:center"
                      type="password"
                      name="password"
                      v-model="password"
                      placeholder="Choisissez un Mot de passe"
                    /><br>
                        <small v-if="this.password<6">Le mot de passe doit avoir au moins 6 caractères.</small><br>

                    <input
                      style="width:28em;text-align:center"
                      type="password"
                      name="confirm_password"
                      v-model="confirm_password"
                      placeholder="Confirmez votre Mot de passe"
                    /><br><br>
                        <small v-if="this.password!==this.confirm_password">La confirmation doit être simlaire au mot de passe choisi.</small>

                    <b-button variant="primary"
                      type="submit"
                      v-on:click="this.registerValidation"
                    >Je crée mon compte
                </b-button><br><br>
                <div class=" mt-6">

                  <router-link class="text-green-600" to='/login'>Si vous avez déjà un compte, cliquez ici</router-link><br>
                </div><br>

                <div class="text-center text-sm text-gray-600 mt-4">
                      En cliquant sur le bouton "Je crée mon compte", vous vous soumettez au règlement intérieur<br> de ce blog dont toute violation
                      multirécidiviste sera sanctionnée par un bannissement sans préavis.
                </div><br><br>
                <div v-html="validation"></div>
              </div>
          </div>
        </div>
      </div>
    </template>

<script>
// @ is an alias to /src


export default {
  name: 'Register',
  data(){
    return {
      name:"",
      email:"",
      password:"",
      confirm_password:"",
      validation:""

    }
  },

  methods :{
    registerValidation(){
      var myHeaders = new Headers();
       myHeaders.append("Accept", "application/json");
       myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({"name":this.name,"email":this.email,"password":this.password});

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

     // fetch("http://localhost:8000/api/create", requestOptions)
      fetch("https://fierce-beyond-11866.herokuapp.com/api/create", requestOptions)
        .then(response => response.json())
        .then(result => this.validation=result['message'])
        .catch(error => console.log('error', error));

        this.name = "";
        this.email = "";
        this.country_fruit = "";
        this.password = "";
        this.confirm_password = "";
    }

  }
}


</script>
