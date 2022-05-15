<template>
<!-- Remove the container if you want to extend the Footer to full width. -->
<div>

  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-white"
          style="background-color: #1c2331"
          >
    <!-- Section: Links  -->
    <section class="">
      <br>
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Equipo -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold">{{equipo}}</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              {{desc}}
            </p>
          </div>
          <!-- Grid column -->

          <!-- Integrantes -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Integrantes</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="https://github.com/LuianOrtiz" class="text-white">Luis Angel Ortiz</a>
            </p>
            <p>
              <a href="https://github.com/Pagutri" class="text-white">Salma Patricia Gutiérrez</a>
            </p>
            <p>
              <a href="https://github.com/KarlaINZ25" class="text-white">Karla Itzel Navarrete Zarate</a>
            </p>
            <p>
              <a href="https://github.com/AlejandroTrinidad97" class="text-white">Alejandro Trinidad Zavala</a>
            </p>
            <p>
              <a href="https://github.com/FerchoArceo/" class="text-white">Fernando Arceo Olivares</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- links -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Organizaciones de protección animal</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="https://www.apasdem.org.mx" class="text-white">APASDEM</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- contacto -->
          <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Conocimiento y uso de la biodiversidad en México</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="https://www.biodiversidad.gob.mx/especies/espPrioritaria" class="text-white">biodiversidad.gob.mx</a>
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
  </footer>
  <!-- Footer -->

</div>
</template>


<script>
export default {
    name: "App",
    props: {
    equipo: String,
    desc: String,
  }
}
</script>

<style scoped>
.footer{
  background: #152F4F;
  color:white;
}
</style>