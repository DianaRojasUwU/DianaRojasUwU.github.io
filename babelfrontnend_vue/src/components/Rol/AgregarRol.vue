<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Crear Rol</div>
        <div class="card-body">
          <form v-on:submit.prevent="crearRol">
            <div class="form-group">
              <label for="rolNombre">Rol Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="rolNombre"
                v-model="form.rolNombre"
                aria-describedby="helpId"
                id="rolNombre"
                placeholder="Rol Nombre"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el nombre del nuevo rol</small>
            </div><br/>
            <!-- Este campo permanece nulo ya que suele ser asignado automáticamente por la base de datos -->
            <input type="hidden" v-model="form.rolID" />
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Crear</button>
              <router-link :to="{ path: '/vistaAdmin/ListarRol' }" class="btn btn-danger">Cancelar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "CrearRol",
    data() {
      return {
        form: {
          rolID: 0, // Este campo permanece nulo ya que suele ser asignado automáticamente por la base de datos
          rolNombre: "",
        },
      };
    },
    methods: {
      crearRol() {
        axios.post("https://localhost:7102/api/roles", this.form)
          .then(data => {
            console.log(data);
            this.$router.push("/vistaAdmin/ListarRol");
          })
          .catch(error => {
            console.error(error.response.data);
          });
      },
    },
  };
  </script>
  