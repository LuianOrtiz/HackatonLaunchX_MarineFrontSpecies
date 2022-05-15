<template>
  <div class="home">
    <ImagesSlideshow/>
    <br>
    <PurposeObjective 
      titulo1="Objetivo"
      parrafo1="Darle visibilidad a las especies marinas que se encuentran en peligro de extinción en nuestro país."
      parrafo2="El nombre de nuestro proyecto es 'Marine Well' haciendo alusión a un pozo de sabiduría marina del cual cualquier persona puede acercarse a beber para así ayudar a la protección de los animales que aquí se muestran dentro de la pestaña ‘Animales’. Ayúdanos a que este pozo de conocimiento se vacié para que los océanos estén llenos de todas estas grandiosas especies.
"
      titulo2="Escalabilidad"
      parrafo3="La página cuenta con la capacidad de añadir más especies en peligro desde la pestaña de administración."
      parrafo4="En siguientes versiones el proyecto es capaz de crecer para mostrar información acerca de animales marinos no solamente de especies mexicanas pudiendo así ser una fuente de información para más gente alrededor del mundo."
    />
    <br><br>
    
  </div>
</template>

<script>
// @ is an alias to /src

import ImagesSlideshow from '@/components/home/ImagesSlideshow.vue'
import PurposeObjective from '@/components/home/PurposeObjective.vue'

export default {
  name: 'HomeView',
  components: {
    ImagesSlideshow,
    PurposeObjective,
  }
}
</script>