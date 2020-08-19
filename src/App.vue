<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: "app",
    components: {
        Navigation,
        Footer
    }
}

</script>

<style>

    #app {
      text-align: center;
      height: 800px;
    }

    .rowLogo {
        text-align: center;
    }
    /* Add a black background color to the top navigation */
    .topnav {
    background-color: #B0E0E6;
    height: 3.6em;
    margin-bottom: 20px;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
    float: left;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    }


</style>
