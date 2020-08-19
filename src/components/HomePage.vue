<template>
  <div>
    <h1>A PARAÎTRE LE MOIS PROCHAIN...</h1>
    <b-carousel class="carouselContainer"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="490"
      img-height="275"
      style="text-shadow: 1px 1px 2px #333; margin-left:30em; margin-right:30em;  margin-bottom:10em"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

<!-- 5 IMAGES DE MON SLIDER     -->
      <b-carousel-slide caption="Akebia">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="490"
            height="275"
            src="../assets/Carousel/akebia.png"
            alt="Fruit exotique à peau violette"
          >
        </template>
        <p>
          Ce fruit porte le nom de la plante sur laquelle il pousse.
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Aki">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="490"
            height="275"
            src="../assets/Carousel/aki-fruit-mortel.png"
            alt="Fruit exotique akée ou aki en Jamaïque"
          >
        </template>
        <p>
          Appelé aussi Akée, mal préparé ce fruit est mortel...
        </p>
      </b-carousel-slide>

      <b-carousel-slide caption="Citron caviar">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="490"
            height="275"
            src="../assets/Carousel/citroncaviar2(1).png"
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
            width="490"
            height="275"
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
            width="490"
            height="275"
            src="../assets/Carousel/Caramboles.png"
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
/*    .carouselContainer {
        height: 900px;
    } */
</style>
