<template>
  <div class="about">
    <b-container fluid> 
      <b-row> 
        <b-col  cols="6" md="4"> 
          <marine-card> </marine-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MarineCard from '@/components/species/MarineCard.vue'
export default {
  name: 'SpeciesView',
  components: {
    MarineCard
  },
  data() {
    return {
      marine_animals: [],
    }
  }
}
</script>