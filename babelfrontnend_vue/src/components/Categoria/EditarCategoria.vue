<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Categoría</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarCategoria">
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="form.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el nombre de la categoría</small>
            </div><br>
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Editar</button>
              <router-link :to="{ path: '/ListarCategoria' }" class="btn btn-danger">Cancelar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EditarCategoria',
    data() {
      return {
        id: null,
        form: {
          nombre: '',
        },
      };
    },
    methods: {
      editarCategoria() {
        axios.put(`https://localhost:7102/api/categorias/${this.id}`, this.form)
          .then((response) => {
            console.log(response);
            this.$router.push('/vistaAdmin/ListarCategoria');
          })
          .catch((error) => {
            console.error(error.response.data);
          });
      },
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get(`https://localhost:7102/api/categorias/${this.id}`)
        .then((response) => {
          this.form.nombre = response.data.nombre;
        });
    },
  };
  </script>
  