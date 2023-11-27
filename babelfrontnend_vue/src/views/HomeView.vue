<template>
  <div>
    <!-- Título de la página -->
    <h1 class="text-start mb-4">Libros</h1>
    
    <!-- Grid de tarjetas de libros -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
      <div v-for="libro in libros" :key="libro.id" class="col mb-4">
        <div class="card libro-card">
          <!-- Imagen de la portada del libro -->
          <img src="../assets/enigmanocturno.jpg" class="card-img-top rounded" alt="Portada del libro">
          
          <!-- Contenido de la tarjeta -->
          <div class="card-body">
            <h5 class="card-title">{{ libro.titulo }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ libro.autor }}</h6>
            <p class="card-text precio">{{ libro.precio }}</p>
            
            <!-- Botón para mostrar el estado de stock -->
            <button class="btn btn-stock" :class="{ 'con-stock': libro.stock > 0, 'sin-stock': libro.stock <= 0 }">
              {{ getStockText(libro.stock) }}
            </button>
            
            <!-- Botón para ver detalles del libro -->
            <button class="btn btn-detalles" @click="verDetalles(libro.id)">Detalles</button>
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
    // Llama al método para obtener la lista de libros al cargar el componente
    this.obtenerLibros();
  },
  methods: {
    async obtenerLibros() {
      try {
        // Realiza una solicitud GET para obtener la lista de libros desde la API
        const response = await axios.get("https://localhost:7102/api/libros");
        // Almacena la lista de libros en el estado local
        this.libros = response.data;
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    },
    verDetalles(libroId) {
      // Navega a la página de detalles del libro y pasa el ID como parámetro
      this.$router.push({ name: 'detalleLibro', params: { id: libroId } });
    },
    getStockText(stock) {
      // Retorna el texto para el estado de stock
      return stock > 0 ? 'Con Stock' : 'Sin Stock';
    },
    agregarAlCarrito(libro) {
      // Llama a la mutación para agregar el libro al carrito
      this.$store.commit('agregarAlCarrito', libro);
    },
  },
};
</script>


<style>
/* body{
  background-color: #CCC4C4;
} */
.libro-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.libro-card:hover {
  transform: translateY(-5px);
}

.card-title {
  color: #1C3C4C;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card-subtitle {
  color: #6c757d;
}

.precio {
  color: #1C3C4C;
  font-weight: bold;
  font-size: 1.2rem;
}

.con-stock {
  color: green;
}

.sin-stock {
  color: red;
}

.btn-detalles {
  background-color: #1C3C4C;
  color: #ddd;
  border: none;
  width: 100%;
}

.btn-detalles:hover {
  background-color: #155d74;
  color: #fff;
}
.btn-stock {
  background-color: transparent;
  color: #1C3C4C;
  border: 1px solid #1C3C4C;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  cursor: default;
  user-select: none; /* Evita la selección de texto */

}

.con-stock {
  color: green;
  border-color: green;
}

.sin-stock {
  color: red;
  border-color: red;
}
.btn-stock:hover {
  pointer-events: none; /* Desactiva los eventos del puntero en el hover */
}
</style>