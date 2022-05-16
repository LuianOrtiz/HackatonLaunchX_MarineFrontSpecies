<template>
    <div>
        <b-card class="overflow-hidden cardcontent" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <div>
                        <b-card-img :src="marine_animal.url_image" alt="Imagen Especie Marina" class="rounded-0"></b-card-img>
                    </div>
                    <br>
                    <p class="risk"> <b> Riesgo: </b>  {{marine_animal.riskstatus.estado_riesgo}} </p>
                </b-col>
                <b-col md="6">
                    <b-card-body>
                    <b-card-text class="texto">
                        <p> <b> Nombre: {{marine_animal.name}} </b> </p>
                        <p>  <i> <b>  Nombre Cientifico: </b> {{marine_animal.scientific_name}} </i> </p>
                        <p> <b> Habitad: </b>  {{marine_animal.habitad.name}} </p>
                        <p> <b> Descripción: </b>  {{marine_animal.description}} </p>
                    </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <b-button :href="marine_animal.url_asosiacion" target="_blank"  size="m" class="botones">Asociaciones</b-button> 
            <b-button :href="marine_animal.url_info" target="_blank" size="m" class="botones">Más información </b-button>
        </b-card>
    <div>
    </div>
        
    </div>
    
</template>

<script>
export default {
  name: 'MarineCard',
  data() {
      return {
          
      }
  },
  
  props: {
      marine_animal: [],
  },
  methods: {
      hola() {
          console.log("Hola");
      }
  }
}
</script>

<style scoped>
.cardcontent {
    border: solid black;
}
.botones {
    background-color: #FF9F1C;
    color: #FFFF;
    padding: 0 10px;
    margin: 0 50px;
}

.texto {
    text-align: left; 
}

</style>