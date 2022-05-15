<template>
    <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Animalito</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="animal.name"
          name="title"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="title">Nombre cientifico</label>
        <input
          type="text"
          class="form-control"
          id="scientific_name"
          required
          v-model="animal.scientific_name"
          name="scientific_name"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="title">Descripción</label>
        <input
          type="text"
          class="form-control"
          id="description"
          required
          v-model="animal.description"
          name="description"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="title">Imagen</label>
        <input
          type="text"
          class="form-control"
          id="url_image"
          required
          v-model="animal.url_image"
          name="url_image"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="title">More Info</label>
        <input
          type="text"
          class="form-control"
          id="url_info"
          required
          v-model="animal.url_info"
          name="url_info"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="title">Habitad</label>
        <input
          type="text"
          class="form-control"
          id="habitadId"
          required
          v-model="animal.habitadId"
          name="habitadId"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="title">Estado de Riesgo</label>
        <input
          type="text"
          class="form-control"
          id="riskstatusId"
          required
          v-model="animal.riskstatusId"
          name="riskstatusId"
        />
      </div>
      <br>
      <br>
      <button @click="saveAnimal" class="btn btn-success">Agregar</button>
    </div>
    
    <div v-else>
      <h4> Animal creado exitosamente. </h4>
      <button class="btn btn-success" @click="newAnimal">Add</button>
    </div>
  </div>
</template>

<script>
import AnimalService from '@/services/AnimalService';

export default {
  name: "add-animal",
  data() {
    return {
      animal: {
        id: null,
        name: "",
        scientific_name: "",
        description: "",
        url_image: "",
        url_info: "",
        habitadId: "",
        riskstatusId: "",
      },
      submitted: false
    };
  },
  methods: {
    saveAnimal() {
      var data = {
        name: this.animal.name,
        scientific_name: this.animal.scientific_name,
        description: this.animal.description,
        url_image: this.animal.url_image,
        url_info: this.animal.url_info,
        habitadId: this.animal.habitadId,
        riskstatusId: this.animal.riskstatusId
      };
      console.log(data);
      AnimalService.create(data)
        .then(response => {
          this.animal.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newAnimal() {
      this.submitted = false;
      this.animal = {};
    }
  }
};
</script>

<style scoped>

</style>