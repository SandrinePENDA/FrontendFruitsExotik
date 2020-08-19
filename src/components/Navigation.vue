<template>
    <div>
        <h1>Bienvenue sur votre blog mes-fruits-exotik.fr</h1>
      <div class="rowLogo" id="nav">
          <a href="/"><img alt="logo du blog mes fruits exotik" src="../assets/logoExotik.png"></a>
      </div>

      <div class="Connexion-Search">
        <!--  <router-link to="/login"><button type="button" name="buttonConnexion">Connexion</button></router-link> -->
          <input type="text" placeholder="Une recherche ? C'est ici." name="search">
          <button type="submit"><i class="fa fa-search"></i> Rechercher</button>
      </div><br>

      <div class="topnav" id="menu">
            <b-button id="allMini" href="#/articles" pill variant="outline-primary">Voir tous les Mini-articles</b-button>
        <!--    <a href="/articles" class="active">Voir tous les Mini-articles</a> -->
            <b-button id="createMini" href="#/myspace" pill variant="outline-primary">Mon compte</b-button>
        <!--    <a href="/myspace">Mon compte</a> -->
        <!--    <router-link to="/add"><button id="createMini" type="button" name="createMini">Créer un mini-article</button></router-link>  -->
            <b-button id="createMini" href="#/add" pill variant="outline-primary">Créer un mini-article</b-button>
            <b-button id="buttonEnter" href="#/login" pill variant="success">Accéder au site</b-button>
        <!--    <router-link to="/login"><button id="connexion" type="button" name="buttonConnexion">ENTRER</button></router-link>  -->
      </div>




    </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu {

}
#allMini {
    margin-left: 2em;
}

#createMini {
/*    margin-left: 20em; */
}
#buttonEnter {
   margin-left: 63em;
}

</style>
