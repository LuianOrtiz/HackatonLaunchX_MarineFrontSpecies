<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url('https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')">
        <div class="carousel-caption">
          <h5>Tortuga Marina</h5>
          <p>Siete de las ocho especies reconocidas en el mundo anidan en las playas de México.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('https://images.pexels.com/photos/5344794/pexels-photo-5344794.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')">
        <div class="carousel-caption">
          <h5>Las playas y las costas</h5>
          <p>El origen de la vida en este planeta</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  
};
</script>

<style scoped>
.carousel-item {
  height: 65vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<!--
SRC: https://freefrontend.com/bootstrap-headers/
-->