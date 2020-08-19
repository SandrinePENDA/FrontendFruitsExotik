<template>
    <div class="piedpage">
        <a class="logoHome" href="/"><img alt="logo du blog mes fruits exotik" src="../assets/logoExotik.png"></a> <br>
        <a href="#/articles" id="link_all_mini">Voir les publications</a>
        <a href="#/myspace" id="member_space">Espace Membre</a>
        <div class="contactAdmin">Une question ou une remarque? <br> Contactez l'administrateur à <br> admin.blog@mes-fruits-exotik.fr</div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .piedpage {
        margin-top: 3em;
        border-color:  #B0E0E6;
        background-color: white;
        height: 8em;
        font-size: 1em;
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        margin-bottom: 0px;
    }

    .logoHome {
        float: left;
    }

    #link_all_mini {
        float: left;
        font-size: 1em;
        margin-right: 2em;
    }

    #member_space {
        font-size: 1em;
    }

    .contactAdmin {
        background-color: #B0E0E6;
        border-radius: 10px;
        float: right;
        font-size: 1em;
        margin-right: 3em;
        width: 300px
    }


</style>
