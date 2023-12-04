<template>
    <div class="mas-vendidos-container">
      <h2 class="text-center mb-4">Selección Destacada</h2>
      <div class="container">
        <div class="row">
          <div v-for="libro in masVendidos" :key="libro.id" class="col-md-4 mb-4">
            <div class="card libro-card shadow-sm">
              <img :src="libro.imagen" class="card-img-top" :alt="libro.titulo">
              <div class="card-body">
                <h5 class="card-title">{{ libro.titulo }}</h5>
                <p class="card-text">{{ truncarDescripcion(libro.descripcion) }}</p>
                <p class="card-text">Stock: {{ libro.stock }}</p>
                <router-link :to="{ name: 'detalleLibro', params: { id: libro.id }}" class="btn btn-primary btn-sm">Detalles</router-link>
              </div>
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
        masVendidos: [],
      };
    },
    mounted() {
      this.obtenerMasVendidos();
    },
    methods: {
      async obtenerMasVendidos() {
        try {
          const response = await axios.get('https://localhost:7102/api/libros');
          // Filtra los libros con stock igual o menor a 5
          this.masVendidos = response.data.filter(libro => libro.stock <= 5);
        } catch (error) {
          console.error('Error al obtener libros más vendidos:', error);
        }
      },
  
      truncarDescripcion(descripcion) {
        // Trunca la descripción a 50 caracteres y agrega puntos suspensivos
        return descripcion.length > 50 ? `${descripcion.substring(0, 50)}...` : descripcion;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales para las cards más pequeñas */
  .libro-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }
  
  .libro-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  
  .card-text {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
  
  .btn-primary {
    font-size: 0.8rem;
  }
  
  </style>
  