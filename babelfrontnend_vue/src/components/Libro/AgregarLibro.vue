<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Crear Libro</div>
        <div class="card-body">
          <form v-on:submit.prevent="crearLibro">
            <div class="form-group">
              <label for="titulo">Título:</label>
              <input
                type="text"
                class="form-control"
                name="titulo"
                v-model="form.titulo"
                aria-describedby="helpId"
                id="titulo"
                placeholder="Título"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el título del libro</small>
            </div><br>
            <div class="form-group">
              <label for="autor">Autor:</label>
              <input
                type="text"
                class="form-control"
                name="autor"
                v-model="form.autor"
                aria-describedby="helpId"
                id="autor"
                placeholder="Autor"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el nombre del autor</small>
            </div><br>
            <div class="form-group">
              <label for="descripcion">Descripción:</label>
              <textarea
                class="form-control"
                name="descripcion"
                v-model="form.descripcion"
                aria-describedby="helpId"
                id="descripcion"
                placeholder="Descripción"
              ></textarea>
              <small id="helpId" class="form-text" text-muted>Ingresa la descripción del libro</small>
            </div><br>
            <div class="form-group">
              <label for="enlace">Imagen:</label>
              <input
                type="text"
                class="form-control"
                name="imagen"
                v-model="form.imagen"
                aria-describedby="helpId"
                id="imagen"
                placeholder="URL de la imagen"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa la URL de la imagen</small>
            </div><br>
            <div class="form-group">
              <label for="precio">Precio:</label>
              <input
                type="number"
                class="form-control"
                name="precio"
                v-model="form.precio"
                aria-describedby="helpId"
                id="precio"
                placeholder="Precio"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el precio del libro</small>
            </div><br>
            <div class="form-group">
              <label for="stock">Stock:</label>
              <input
                type="number"
                class="form-control"
                name="stock"
                v-model="form.stock"
                aria-describedby="helpId"
                id="stock"
                placeholder="Stock"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa el stock del libro</small>
            </div><br>
            <div class="form-group">
              <label for="categoria">Categoría:</label>
              <select class="form-control" v-model="form.categoriaID" id="categoria">
                <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{ categoria.nombre }}</option>
              </select>
              <small id="helpId" class="form-text" text-muted>Selecciona la categoría del libro</small>
            </div><br>
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Crear</button>
              <router-link :to="{ path: '/vistaAdmin/ListarLibro' }" class="btn btn-danger">Cancelar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "CrearLibro",
    data() {
      return {
        form: {
          id: 0,
          titulo: "",
          autor: "",
          descripcion: "",
          imagen: "",
          precio: 0,
          stock: 0,
          categoriaID: null, // Agrega este campo para almacenar el ID de la categoría
        },
        categorias: [],
      };
    },
    methods: {
      crearLibro() {
        axios.post("https://localhost:7102/api/libros", {
          id: this.form.id,
          titulo: this.form.titulo,
          autor: this.form.autor,
          descripcion: this.form.descripcion,
          imagen: this.form.imagen,
          precio: this.form.precio,
          stock: this.form.stock,
          categoriaID: this.form.categoriaID, // Utiliza el ID del rol
          categoria: {
            id: 0,
            nombre: "" // Puedes dejarlo vacío o asignar el nombre si es necesario
          }
        })
        .then(data => {
          console.log(data);
          this.$router.push("/vistaAdmin/ListarLibro");
        })
        .catch(error => {
          console.error(error.response.data);
        });
      },
    },
    mounted() {
      axios.get("https://localhost:7102/api/categorias")
        .then(response => {
          this.categorias = response.data;
        });
    },
  };
  </script>
  