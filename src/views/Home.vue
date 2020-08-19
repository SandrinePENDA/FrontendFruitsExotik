<template>
    <div class="home">
        <HomePage />

    </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    HomePage,
  }
}
</script>

<style scoped>
    body {
        background: #F0F8FF;
    }
</style>
