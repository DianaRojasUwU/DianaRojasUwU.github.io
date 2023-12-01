<template>
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-8">
            <h5 class="my-2 mr-md-auto font-weight-normal">Libros</h5>
          </div>
          <div class="col col-lg-2">
            <h5 class="my-2 mr-md-auto font-weight-normal">
              <router-link :to="{ path: '/vistaAdmin/AgregarLibro' }" class="btn btn-warning">Agregar</router-link>
            </h5>
          </div>
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoría</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="libro in libros" :key="libro.id">
                <td>{{ libro.id }}</td>
                <td>{{ libro.titulo }}</td>
                <td>{{ libro.autor }}</td>
                <td>{{ libro.descripcion }}</td>
                <td>{{ libro.precio }}</td>
                <td>{{ libro.stock }}</td>
                <td>{{ libro.categoria.nombre }}</td>
  
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link :to="{ path: '/vistaAdmin/EditarLibro/' + libro.id }" class="btn btn-warning">Editar</router-link>
                  </div>
                </td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="borrarLibro(libro.id)" class="btn btn-danger">Eliminar</button>
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
        libros: [],
      };
    },
    created() {
      this.consultarLibros();
    },
    methods: {
      consultarLibros() {
        axios.get("https://localhost:7102/api/libros")
          .then((result) => {
            this.libros = result.data;
            console.log(result.data);
          });
      },
      borrarLibro(id) {
        console.log(id);
  
        axios.delete("https://localhost:7102/api/libros/" + id)
          .then(() => {
            // Redirige después de la eliminación
            this.consultarLibros();
          });
      },
    },
  };
  </script>
  
  <style>
  span {
    color: black;
  }
  </style>
  