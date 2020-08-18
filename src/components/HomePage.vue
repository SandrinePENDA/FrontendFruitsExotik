<template>
  <div>
    <h1>A PARAÎTRE LE MOIS PROCHAIN...</h1>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; margin-left:30em; margin-right:30em;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

<!-- 5 IMAGES DE MON SLIDER     -->
      <b-carousel-slide caption="Akebia">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="580"
            height="387"
            src="../assets/Carousel/akebia.jpg"
            alt="Fruit exotique à peau violette"
          >
        </template>
        <p>
          Ce fruit porte le nom de la plante sur laquelle il pousse.
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Salak">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="580"
            height="387"
            src="../assets/Carousel/peauserpent.png"
            alt="Fruit exotique aguaje d'Amazonie"
          >
        </template>
        <p>
          L'aspect de sa peau lui donne le surnom de "fruit du serpent" ...
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Citron caviar">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="580"
            height="387"
            src="../assets/Carousel/citroncaviar2.png"
            alt="Fruit exotique citron caviar"
          >
        </template>
        <p>
          Les grains de ce fruit font penser au caviar d'où son nom.
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Fruit dit de l'Ayal">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="580"
            height="387"
            src="../assets/Carousel/ayal.jpg"
            alt="Fruit exotique rare, aspect flamboyant, l'ayal"

          >
        </template>
        <p>
          Fruit aux couleurs flamboyantes, il vient d'Australie...
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="La Carambole">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="580"
            height="387"
            src="../assets/Carousel/Caramboles.jpg"
            alt="Fruit exotique répandu en Asie"
          >
        </template>
        <p>
          Est également connu sous le nom de fruit étoilé...
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
