<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Libro</div>
      <div class="card-body">
        <form v-on:submit.prevent="editarLibro">
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
            <small id="helpId" class="form-text" text-muted
              >Ingresa el título del libro</small
            >
          </div>
          <br />
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
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del autor</small
            >
          </div>
          <br />
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
            <small id="helpId" class="form-text" text-muted
              >Ingresa la descripción del libro</small
            >
          </div>
          <br />
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
            <small id="helpId" class="form-text" text-muted
              >Ingresa el precio del libro</small
            >
          </div>
          <br />
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
            <small id="helpId" class="form-text" text-muted
              >Ingresa el stock del libro</small
            >
          </div>
          <br />
          <div class="form-group">
            <label for="categoria">Categoría:</label>
            <select
              class="form-control"
              v-model="form.categoriaID"
              id="categoria"
            >
              <option
                v-for="categoria in categorias"
                :key="categoria.id"
                :value="categoria.id"
              >
                {{ categoria.nombre }}
              </option>
            </select>
            <small id="helpId" class="form-text" text-muted
              >Selecciona la categoría del libro</small
            >
          </div>
          <br />
          <div class="btn-group" role="group">
            <button type="submit" class="btn btn-success">Editar</button>
            <router-link
              :to="{ path: '/vistaAdmin/ListarLibro' }"
              class="btn btn-danger"
              >Cancelar</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditarLibro",
  data() {
    return {
      id: null,
      form: {
        id: 0,
        titulo: "",
        autor: "",
        descripcion: "",
        imagen:"",
        precio: 0,
        stock: 0,
        categoriaID: 0,
      },
      categorias: [],
    };
  },
  methods: {
    editarLibro() {
      if (typeof this.form.categoriaID !== 'number') {
          // Puedes mostrar un mensaje de error o manejarlo de acuerdo a tus necesidades
          console.error('ID de la categoria no válido');
          return;
        }

        axios.put("https://localhost:7102/api/libros/" + this.id, {
          id: this.form.id,
          titulo: this.form.titulo,
          autor: this.form.autor,
          descripcion: this.form.descripcion,
          imagen: this.form.imagen,
          precio: this.form.precio,
          stock: this.form.stock,
          categoriaID: this.form.categoriaID, 
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
    this.id = this.$route.params.id;

    axios.get("https://localhost:7102/api/libros/" + this.id)
      .then((response) => {
        this.form.id = response.data.id;
        this.form.titulo = response.data.titulo;
        this.form.autor = response.data.autor;
        this.form.descripcion = response.data.descripcion;
        this.form.imagen = response.data.imagen;
        this.form.precio = response.data.precio;
        this.form.stock = response.data.stock;
        this.form.categoriaID = response.data.categoria.id;
      });

    axios.get("https://localhost:7102/api/categorias").then((response) => {
      this.categorias = response.data;
    });
  },
};
</script>
