<template>
  <div>
    <!-- Carrusel principal -->
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/1.svg" class="d-block w-100" alt="Slide 1" />
        </div>
        <div class="carousel-item">
          <img src="../assets/2.svg" class="d-block w-100" alt="Slide 2" />
        </div>
        <div class="carousel-item">
          <img src="../assets/3.svg" class="d-block w-100" alt="Slide 3" />
        </div>
        <div class="carousel-item">
          <img src="../assets/4.svg" class="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Bloque de Sucursales -->
    <div class="container-fluid contenedor store-locations">
      <div class="text-center">
        <div class="row">
          <div class="col" style="font-size: 30px; color: black">
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

<!-- Carrusel de libros -->
<div id="carouselLibros" class="carousel slide">
    <div class="carousel-inner">
      <div v-for="(grupo, index) in librosPorGrupo" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
        <div class="d-flex justify-content-around align-items-center w-100">
          <div v-for="libro in grupo" :key="libro.id" class="card libro-card">
            <img :src="libro.imagen" class="card-img-top libro-imagen" alt="Portada del libro">
            <div class="card-body">
              <h5 class="card-title scrolling-text">{{ libro.titulo }}</h5>
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
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselLibros" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselLibros" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="space"/> 

    <!-- Libro del mes -->
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col libromes">
          <img
            class="img-fluid img"
            src="https://www.gandhi.com.mx/media/wysiwyg/libro_mes_ken_follet_nov_2023.jpg"
            alt=""
          />
        </div>
        <div
          class="col libromes d-flex justify-content-center align-items-center"
          style="background-color: rgb(226, 224, 224)"
        >
          <div class="container">
            <p class="fs-6 text-start">Libro del mes</p>
            <p class="fs-2 text-start font-weight-bold">
              Triste corazon oscuro.
            </p>
            <p class="fs-5 text-start">
              "Louisa Reid nos presenta una conmovedora historia que destaca la
              fuerza de los lazos fraternales. A pesar de la pérdida, Hephziba
              encuentra valentía para reconstruir su vida."
            </p>
          </div>
        </div>
      </div>
    </div>
<div class="space"/>
<h2 class="container text-center">¡Eventos y noticias!</h2> 
<div class="space"/> 

  <!-- Carrusel de eventos -->
<div id="carouselEventos" class="carousel slide">
  <div class="carousel-inner">
    <div v-for="(grupo, index) in eventosPorGrupo" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
      <div class="d-flex justify-content-around align-items-center w-100">
        <div v-for="evento in grupo" :key="evento.id" class="card mb-3 evento-card" style="max-width: 540px;">
          <img :src="require(`@/assets/${evento.imagen}.svg`)" class="card-img-top" alt="Imagen del evento">
          <div class="card-body">
            <h5 class="card-title">{{ evento.titulo }}</h5>
            <p class="card-text">{{ evento.descripcion }}</p>
            <p class="card-text"><small class="text-muted">{{ evento.fechaInicio }}</small></p>
            <button class="btn btn-detalles" @click="verDetallesEvento(evento.id)">Detalles</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselEventos" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselEventos" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <!-- fin -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      libros: [],
      eventos: [],
    };
  },
  computed: {
    librosPorGrupo() {
      // Agrupa los libros en grupos de tres
      const grupos = [];
      for (let i = 0; i < this.libros.length; i += 3) {
        grupos.push(this.libros.slice(i, i + 3));
      }
      return grupos;
    },
    eventosPorGrupo() {
       // Agrupa los libros en grupos de tres
       const grupos = [];
      for (let i = 0; i < this.eventos.length; i += 2) {
        grupos.push(this.eventos.slice(i, i + 2));
      }
      return grupos;
    },

  },
  mounted() {
    // Llama al método para obtener la lista de libros al cargar el componente
    this.obtenerLibros();
    this.obtenerEventosNoticias();
  },
  methods: {
    async obtenerLibros() {
      try {
        // Realiza una solicitud GET para obtener la lista de libros desde la API
        const response = await axios.get("https://localhost:7102/api/libros");

        // Filtra los libros por la categoría con ID que se necesita "Novedades"
        const librosFiltrados = response.data.filter(
          (libro) => libro.categoriaID === 1
        );

        // Almacena la lista de libros filtrada en el estado local
        this.libros = librosFiltrados;
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    },
    async obtenerEventosNoticias() {
      try {
        // Realiza una solicitud GET para obtener la lista de libros desde la API
        const response = await axios.get(
          "https://localhost:7102/api/eventosnoticias"
        );

        // Almacena la lista de libros filtrada en el estado local
        this.eventos = response.data;
        console.log(this.eventos);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    },
    verDetalles(libroId) {
      // Navega a la página de detalles del libro y pasa el ID como parámetro
      this.$router.push({ name: "detalleLibro", params: { id: libroId } });
    },
    getStockText(stock) {
      // Retorna el texto para el estado de stock
      return stock > 0 ? "Con Stock" : "Sin Stock";
    },
    agregarAlCarrito(libro) {
      // Llama a la mutación para agregar el libro al carrito
      this.$store.commit("agregarAlCarrito", libro);
    },
  },
};
</script>

<style>
.evento-card .col-md-4 {
  display: flex;
  align-items: center;
}

.evento-card .col-md-4 img {
  max-width: 100%; /* Asegura que la imagen no exceda el ancho del contenedor */
  height: auto; /* Hace que la altura de la imagen se ajuste automáticamente */
  border-radius: 10px; /* Agrega bordes redondeados */
}

.evento-card {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 1rem;
  width: 540px; /* Fijamos el ancho de la card */
}
.libro-card {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 1rem;
  width: 18rem; /* Fijamos el ancho de la card */
}

.libro-imagen {
  object-fit: cover; /* Hacemos que las imágenes cubran completamente la card */
  height: 300px; /* Fijamos la altura deseada */
}

.libro-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.scrolling-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.img {
  width: 100%;
  height: 100%;
}
.contenedor {
  background-color: #ebc288;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
}

.libromes {
  text-align: center;
}

.linktext {
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  color: #2f2811;
}

.linktext:hover {
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

.precio {
  color: #1c3c4c;
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
  background-color: #1c3c4c;
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
  color: #1c3c4c;
  border: 1px solid #1c3c4c;
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
}

.store-locations {
  margin: 3rem 0;
}
</style>
