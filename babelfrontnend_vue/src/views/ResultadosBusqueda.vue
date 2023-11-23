<template>
    <div>
      <h2 class="text-start mb-4">Resultados de la búsqueda</h2>
      <div v-if="libros.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
        <div v-for="libro in libros" :key="libro.id" class="col mb-4">
          <div class="card libro-card">
            <img :src="libro.imagen" class="card-img-top rounded" :alt="libro.titulo">
            <div class="card-body">
              <h5 class="card-title">{{ libro.titulo }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ libro.autor }}</h6>
              <p class="card-text precio">{{ libro.precio }}</p>
              <button class="btn btn-stock" :class="{ 'con-stock': libro.stock > 0, 'sin-stock': libro.stock <= 0 }">
                {{ getStockText(libro.stock) }}
              </button>
              <button class="btn btn-detalles" @click="verDetalles(libro.id)">Detalles</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No se encontraron resultados.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ResultadosBusqueda',
    computed: {
      libros() {
        // Parsea los parámetros de la consulta y devuelve la lista de libros
        const librosString = this.$route.query.libros || '[]';
        return JSON.parse(librosString);
      },
    },
    methods: {
      verDetalles(libroId) {
        // Navegar a la página de detalles del libro y pasar el ID como parámetro
        this.$router.push({ name: 'detalleLibro', params: { id: libroId } });
      },
      getStockText(stock) {
        return stock > 0 ? 'Con Stock' : 'Sin Stock';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para la vista de resultados si es necesario */
  </style>
  