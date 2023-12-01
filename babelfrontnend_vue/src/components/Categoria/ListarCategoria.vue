<template>
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col">
            <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
          </div>
          <div class="col-md-8">
            <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Categorías</h5>
          </div>
          <div class="col col-lg-2">
            <h5 class="my-2 mr-md-auto font-weight-normal">
              <button type="button" v-on:click="agregarCategoria()" class="btn btn-success">Agregar</button>
            </h5>
          </div>
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="categoria in categorias" :key="categoria.id">
                <td>{{ categoria.id }}</td>
                <td>{{ categoria.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="editarCategoria(categoria.id)" class="btn btn-warning">Editar</button>
                  </div>
                </td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="borrarCategoria(categoria.id)" class="btn btn-danger">Eliminar</button>
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
  import axios from 'axios';
  
  export default {
    data() {
      return {
        categorias: [],
      };
    },
    created() {
      this.listarCategorias();
    },
    methods: {
      listarCategorias() {
        axios.get('https://localhost:7102/api/categorias')
          .then((response) => {
            this.categorias = response.data;
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      },
      borrarCategoria(id) {
        console.log(id);
  
        axios.delete(`https://localhost:7102/api/categorias/${id}`)
          .then(() => {
            // Recarga la lista después de eliminar
            this.listarCategorias();
          })
          .catch((error) => {
            console.error(error);
          });
      },
      editarCategoria(id) {
        console.log(id);
        this.$router.push(`/EditarCategoria/${id}`);
      },
      agregarCategoria() {
        this.$router.push('AgregarCategoria');
      },
    },
  };
  </script>
  
  <style>
    span {
      color: black;
    }
  </style>
  