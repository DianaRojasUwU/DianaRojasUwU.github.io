<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3 col-12 text-center">
          <img src="../assets/enigmanocturno.jpg" alt="Portada del libro" class="img-fluid libro-imagen" />
        </div>
        <div class="col-md-6 col-12 text-center">
          <div class="detalle-libro">
            <h1>{{ libro.titulo }}</h1>
            <p class="autor">Autor: {{ libro.autor }}</p>
            <p class="descripcion">{{ libro.descripcion }}</p>
          </div>
        </div>
        <div class="col-md-3 col-12 text-center detalles-adicionales">
          <p class="precio mb-3">Precio: {{ libro.precio }}</p>
          <button class="btn btn-primary btn-comprar" @click="comprarLibro" :disabled="libro.stock === 0">Comprar</button>
          <button class="btn btn-outline-secondary btn-agregar-carrito" @click="agregarAlCarrito" :disabled="libro.stock === 0">Agregar al carrito</button>
          <p v-if="libro.stock === 0" class="agotado">¡Agotado!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        libro: {},
      };
    },
    mounted() {
      this.obtenerDetalleLibro();
    },
    methods: {
      async obtenerDetalleLibro() {
        try {
          const libroId = this.$route.params.id;
          const response = await axios.get(
            `https://localhost:7102/api/libros/${libroId}`
          );
          this.libro = response.data;
          console.log(response.data);
        } catch (error) {
          console.error("Error al obtener detalles del libro:", error);
        }
      },
      comprarLibro() {
    // Llama a la acción para realizar la compra
    this.$store.dispatch('comprarLibro');
  },

  agregarAlCarrito() {
    // Llama a la mutación para agregar el libro al carrito
    this.$store.commit('agregarAlCarrito', this.libro);
  },
    },
  };
  </script>
  
  <style scoped>
  .detalle-libro {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    text-align: left;
  }
  
  h1 {
    color: #333;
  }
  
  .autor {
    font-style: italic;
  }
  
  .descripcion {
    margin-top: 10px;
  }
  
  .precio {
    font-weight: bold;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  
  .btn-comprar {
    background-color: #007bff;
  }
  
  .btn-agregar-carrito {
    background-color: #fff;
    color: #007bff;
    border: 1px solid #007bff;
  }
  
  .btn-agregar-carrito:hover {
    background-color: #007bff;
    color: #fff;
  }
  
  .agotado {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
  </style>
  