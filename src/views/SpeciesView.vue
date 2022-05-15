<template>
  <div class="about">
    <b-container fluid> 
      <b-row> 
        <b-col cols="6" md="4" v-for="(marine_animal, index) in marine_animals" :key="index"> 
          <marine-card :marine_animal=marine_animal> </marine-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MarineCard from '@/components/species/MarineCard.vue'

import AnimalService from '@/services/AnimalService';

export default {
  name: 'SpeciesView',
  components: {
    MarineCard
  },
  data() {
    return {
      marine_animals: [],
    }
  },

  mounted(){
    this.getAnimales();
  },

  methods: {
    async getAnimales(){
      AnimalService.getAll().
      then( response => {
        this.marine_animals = response.data
      } )
    }
  }
}
</script>