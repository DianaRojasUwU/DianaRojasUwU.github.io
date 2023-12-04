<template>
    <div class="recomendados-container">
      <h2 class="text-center mb-4">Recomendados</h2>
      <div class="container">
        <div class="row">
          <div v-for="libro in librosRecomendados" :key="libro.id" class="col-md-4 mb-4">
            <div class="card libro-card shadow-sm">
              <img :src="libro.imagen" class="card-img-top" :alt="libro.titulo">
              <div class="recomendados-label">Recomendados!</div>
              <div class="card-body">
                <h5 class="card-title mb-2">{{ libro.titulo }}</h5>
                <p class="card-text descripcion">{{ truncarDescripcion(libro.descripcion) }}</p>
                <p class="card-text stock">Stock: {{ libro.stock }}</p>
                <router-link :to="{ name: 'detalleLibro', params: { id: libro.id }}" class="btn btn-primary btn-sm detalles">Detalles</router-link>
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
        librosRecomendados: [],
      };
    },
    mounted() {
      this.obtenerLibrosRecomendados();
    },
    methods: {
      async obtenerLibrosRecomendados() {
        try {
          const response = await axios.get('https://localhost:7102/api/libros');
          this.librosRecomendados = this.sorteoAleatorio(response.data);
        } catch (error) {
          console.error('Error al obtener libros recomendados:', error);
        }
      },
  
      sorteoAleatorio(libros) {
        const indicesAleatorios = this.obtenerIndicesAleatorios(libros.length);
        const librosRecomendados = indicesAleatorios.map(indice => libros[indice]);
        return librosRecomendados;
      },
  
      obtenerIndicesAleatorios(max) {
        const indices = [...Array(max).keys()];
        for (let i = indices.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices;
      },
  
      truncarDescripcion(descripcion) {
        return descripcion.length > 50 ? `${descripcion.substring(0, 50)}...` : descripcion;
      },
    },
  };
  </script>
  
  <style scoped>
  .libro-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    position: relative;
  }
  
  .libro-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .recomendados-label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1rem;
    color: red;
  }
  
  .card-title {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  
  .card-text {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
  
  .descripcion {
    max-height: 60px;
    overflow: hidden;
  }
  
  .stock {
    font-size: 0.8rem;
  }
  
  .detalles {
    font-size: 0.8rem;
  }
  </style>
  