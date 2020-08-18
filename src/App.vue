<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
    name: "app",
    components: {
        Navigation
    }
}

</script>

<style>

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    #nav {
      padding: 30px;
    }

    #nav a {
      font-weight: bold;
      color: #2c3e50;
    }

    #nav a.router-link-exact-active {
      color: #42b983;
    }

    .rowLogo {
        text-align: center;
    }
    /* Add a black background color to the top navigation */
    .topnav {
    background-color: #B0E0E6;
    height: 3em;
    overflow: hidden;
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

    /* Change the color of links on hover */
    .topnav a:hover {
/*    background-color: #ddd; */
    color: black;
    text-decoration: none;
    }

    /* Add a color to the active/current link */
    .topnav a.active {
    background-color: #4CAF50;
    color: white;
    }
</style>
