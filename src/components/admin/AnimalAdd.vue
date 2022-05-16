<template>
    <div class="submit-form">
    <div v-if="!submitted">
      <h2>¿Conoces alguna especie en peligro de extinción?</h2>
    <h3>Agregar especie nueva</h3>
      <div class="form-group">
        <label for="name">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="animal.name"
          name="name"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="scientific_name">Nombre cientifico</label>
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
        <label for="description">Descripción</label>
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
        <label for="url_image">link de la imagen</label>
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
        <label for="url_info">Link para más información sobre el animal</label>
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
        <label for="url_asosiacion">link de la asosiación que lo apoya</label>
        <input
          type="text"
          class="form-control"
          id="url_asosiacion"
          required
          v-model="animal.url_asosiacion"
          name="url_asosiacion"
        />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="habitadId">Id: Habitad</label>
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
        <label for="riskstatusId">Id: Estado de Riesgo</label>
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
        url_asosiacion: "",
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
        url_asoc: this.url_asosiacion,
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
.submit-form {
  margin: 100px 0;
  background-color: #FFFF;
}

.form-group input {
  border: solid #FF9F1C;
  padding: 10px 10px;
}

.form-group label {
  text-align: left;
  padding: 10px 0;
  font-size: 24px;
}
</style>