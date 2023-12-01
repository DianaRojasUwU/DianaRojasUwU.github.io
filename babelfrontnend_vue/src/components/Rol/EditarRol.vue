<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Rol</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarRol">
            <div class="form-group">
              <label for="nombre">Nombre del Rol:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="form.nombre"
                id="nombre"
                placeholder="Nombre del Rol"
              />
              <small class="form-text text-muted">Ingresa el nombre del rol</small>
            </div><br/>
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Editar</button>
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
    name: "EditarRol",
    data() {
      return {
        id: null,
        form: {
          id: "",
          nombre: "",
        },
      };
    },
    methods: {
      editarRol() {
        axios.put("https://localhost:7102/api/roles/" + this.id, {
          rolID: this.form.id,
          rolNombre: this.form.nombre,
        })
        .then(data => {
          console.log(data);
          this.$router.push("/vistaAdmin/ListarRol");
        })
        .catch(error => {
          console.error(error.response.data);
        });
      },
    },
    mounted() {
  this.id = this.$route.params.id;
  console.log(this.id);

  if (this.id) {
    axios.get("https://localhost:7102/api/roles/" + this.id)
      .then(datos => {
        this.form.id = datos.data.rolID;
        this.form.nombre = datos.data.rolNombre;
        console.log(this.form);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }
}

  };
  </script>
  