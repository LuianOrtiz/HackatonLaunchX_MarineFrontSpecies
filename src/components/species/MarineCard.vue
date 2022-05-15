<template>
    <div>
        <b-card border-variant="info" class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <div>
                        <b-card-img :src="marine_animal.url_image" alt="Imagen Especie Marina" class="rounded-0"></b-card-img>
                    </div>
                    <br>
                    <p class="risk"> Riesgo: {{marine_animal.riskstatus.estado_riesgo}} </p>
                </b-col>
                <b-col md="6">
                    <b-card-body>
                    <b-card-text class="texto">
                        <p> <b> Nombre: {{marine_animal.name}} </b> </p>
                        <p> <i> Nombre Cientifico: {{marine_animal.scientific_name}} </i> </p>
                        <p> Habitad: {{marine_animal.habitad.name}} </p>
                        <p> Descripción: {{marine_animal.description}} </p>
                    </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <b-button v-b-modal.modal-center  size="sm" class="botones">Asociaciones</b-button> 
            <b-button :href="marine_animal.url_info" target="_blank" size="sm" class="botones">Más información </b-button>
        </b-card>
    <div>
        <b-modal id="modal-center" centered title="Asociaciones que apoyan esta especie">
            <p class="my-4">Asociacion 1</p>
            <p class="my-4">Asociacion 2</p>
        </b-modal>
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
  }
}
</script>

<style scoped>

.botones {
    padding: 0 10px;
    margin: 0 69px;
}
.texto {
    text-align: left; 
}

.risk {
    background-color: crimson;
    
}
</style>