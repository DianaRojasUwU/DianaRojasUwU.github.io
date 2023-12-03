<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/1.svg" class="d-block w-100" alt="Slide 1">
      </div>
      <div class="carousel-item">
        <img src="../assets/2.svg" class="d-block w-100" alt="Slide 2">
      </div>
      <div class="carousel-item">
        <img src="../assets/3.svg" class="d-block w-100" alt="Slide 3">
      </div>
      <div class="carousel-item">
        <img src="../assets/4.svg" class="d-block w-100" alt="Slide 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div>
    <!-- Título de la página -->
    <h1 class="text-align space" id="space">Babel Booktown te recomienda</h1>


    <!-- Grid de tarjetas de libros -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
      <div v-for="libro in libros" :key="libro.id" class="col mb-4">
        <div class="card libro-card">
          <!-- Imagen de la portada del libro -->
          <img :src=libro.imagen class="card-img-top rounded" alt="Portada del libro">

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

    <div class="contenedor">
      <div class="container text-center">
        <div class="row">
          <div class="col" style="font-size: 30px; color: black;">
           <strong> Conoce nuestras sucursales </strong>
          </div>
        </div>
        <div class="row rows-cols-2">
          <div class="col">
            <a class="linktext">Cancún</a>
          </div>
          <div class="col">
            <a class="linktext">Chiapas</a>
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
.contenedor {
  background-color: #ebc288;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
}

.linktext{
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  color: #2f2811;
}
.linktext:hover{
  color: #8d7834;
  text-decoration: underline;
}

.texto-central {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.linea {
  border-top: 2px solid black;
  margin: 10px 0;
}

.texto-bajo {
  font-size: 18px;
}

.carousel-item img {
  max-height: 500px;
  object-fit: fill;
}

@media (max-width: 768px) {
  .carousel-item img {
    max-height: 300px;
    /* Ajusta la altura deseada para dispositivos móviles */
  }
}

.space {
  margin-bottom: 5rem !important;
  margin-top: 5rem !important;
}

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
  user-select: none;
  /* Evita la selección de texto */

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
  pointer-events: none;
  /* Desactiva los eventos del puntero en el hover */
}</style>