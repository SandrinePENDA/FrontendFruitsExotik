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
      </div>

      <div class="topnav" id="menu">
            <a href="/articles" class="active">Voir tous les Mini-articles</a>
            <a href="/myspace">Mon compte</a>
            <router-link to="/login"><button id="connexion" type="button" name="buttonConnexion">ENTRER</button></router-link>
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
#connexion {
    margin-left: 75em;
}

</style>
