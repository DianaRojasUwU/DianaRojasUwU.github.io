<template>
    <div>
      <div class="card">
        <div class="row">
          <div class="col">
            <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
          </div>
          <div class="col-md-8">
            <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Roles</h5>
          </div>
          <div class="col col-lg-2">
            <h5 class="my-2 mr-md-auto font-weight-normal">
              <button type="button" v-on:click="agregarRol()" class="btn btn-warning">Agregar</button>
            </h5>
          </div>
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Rol ID</th>
                <th>Rol Nombre</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rol in roles" :key="rol.rolID">
                <td>{{ rol.rolID }}</td>
                <td>{{ rol.rolNombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="editarRol(rol.rolID)" class="btn btn-warning">Editar</button>                    
                  </div>
                </td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="borrarRol(rol.rolID)" class="btn btn-danger">Eliminar</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        roles: [],
      };
    },
    created() {
      this.consultarRoles();
    },
    methods: {
      consultarRoles() {
        axios.get("https://localhost:7102/api/roles").then((result) => {
          this.roles = result.data;
          console.log(result.data);
        });
      },
      borrarRol(rolID) {
        console.log(rolID);
  
        axios.delete("https://localhost:7102/api/roles/" + rolID).then(() => {
          // Recarga la lista después de la eliminación
          this.consultarRoles();
        });
      },
      editarRol(rolID) {
        console.log(rolID);
        // Redirige a la página de edición de roles
        this.$router.push("/EditarRol/" + rolID);
      },
      agregarRol() {
        // Redirige a la página de creación de roles
        this.$router.push("AgregarRol");
      },
    },
  };
  </script>
  
  <style>
    span {
      color: black;
    }
  </style>
  