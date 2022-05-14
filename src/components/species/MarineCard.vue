<template>
    <div>
        <b-card border-variant="info" class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
                <b-col md="6">
                    <div>
                        <b-card-img src="https://www.poderycritica.com/wp-content/uploads/2020/10/13-24.jpg" alt="Imagen Especie Marina" class="rounded-0"></b-card-img>
                    </div>
                    <br>
                    <p class="risk"> Riesgo: {{marine_animal.risk_status}} </p>
                </b-col>
                <b-col md="6">
                    <b-card-body>
                    <b-card-text class="texto">
                        <p> <b> Nombre: {{marine_animal.name}} </b> </p>
                        <p> <i> Nombre Cientifico: {{marine_animal.scient_name}} </i> </p>
                        <p> Habitad: {{marine_animal.habitad}} </p>
                        <p> Descripción: {{marine_animal.description}} </p>
                    </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <b-button v-b-modal.modal-center  size="sm" class="botones">Asociaciones</b-button> 
            <b-button href="https://twitter.com/home" target="_blank" size="sm" class="botones">Más información </b-button>
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
          marine_animal: {
              name: "",
              scient_name: "",
              habitad: "",
              description: "",
              risk_status: "",
              asociaciones: "",
              moreinfo: "",
          }
      }
  },
  
  props: {
      marine_animals: [],
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