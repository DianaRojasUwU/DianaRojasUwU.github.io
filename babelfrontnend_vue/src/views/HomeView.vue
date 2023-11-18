<template>
  <div>
    <h1>Libros</h1>
    <div class="row">
      <div v-for="libro in libros" :key="libro.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ libro.titulo }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ libro.autor }}</h6>
            <p class="card-text">{{ libro.descripcion }}</p>
            <p class="card-text">Precio: {{ libro.precio }}</p>
            <p class="card-text">Stock: {{ libro.stock }}</p>
            <p class="card-text">Categoría: {{ libro.categoria.nombre }}</p>
            <a href="#" class="btn btn-primary" @click="verDetalles(libro.id)">Ver Detalles</a>
          </div>
        </div>
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
  mounted() {
    this.obtenerLibros();
  },
  methods: {
    async obtenerLibros() {
      try {
        const response = await axios.get("https://localhost:7102/api/libros");
        this.libros = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    },
    verDetalles(libroId) {
      // Puedes navegar a una página de detalles del libro o hacer lo que desees aquí
      console.log("Ver detalles del libro con ID:", libroId);
    },
  },
};
</script>

<style>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
