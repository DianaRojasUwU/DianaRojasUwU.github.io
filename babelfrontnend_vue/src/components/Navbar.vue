<template>
    <!-- Primer navbar: Menú principal de navegación -->
  <nav class="navbar navbar-expand-lg navbar-md bg-custom navbar-dark">
    <div class="container-fluid">
      <!-- Botón de alternancia para dispositivos móviles -->      
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Contenido del menú -->
      <div :class="{ collapse: !isNavbarOpen, 'navbar-collapse': true }" id="navbarSupportedContent">
        <!-- Enlaces del menú izquierdo -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- Enlace a la página de contacto -->
            <router-link to="/contacto" class="nav-link">Contacto</router-link>
          </li>
          <li class="nav-item">
            <!-- Enlace a la página "Quiénes somos" -->
            <router-link to="/quienessomos" class="nav-link">Quiénes somos</router-link>
          </li>
        </ul>
        <!-- Enlaces del menú derecho -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- Enlace al carrito de compras con icono y cantidad -->
            <router-link to="/carrito" class="nav-link">
              <i class="bi bi-cart" style="width: 30px; height: 30px;"></i>
              <!-- Muestra la cantidad de elementos en el carrito si es mayor que cero -->
              <span class="carrito-cantidad" v-if="$store.state.carrito.length > 0" > {{ $store.state.carrito.length }} </span>
            </router-link>
          </li>
          <li class="nav-item">
            <!-- Enlace a la cuenta del usuario o a la página de inicio de sesión -->            
            <!-- Si el estado dentro de usuario ubicado en el index.js de store esta modificado, entonces se mostrara el nombre del usuario 
            que ha iniciado sesión -->
            <router-link v-if="$store.state.usuario" :to="'/usuario/' + $store.state.usuario" class="nav-link"> {{ $store.state.usuario }} </router-link>
            <!-- En caso contrario entonces mostrara "Mi cuenta" y te redirigira hacia la pagina de inicio de sesión -->
            <router-link v-else to="/iniciosesion" class="nav-link">Mi cuenta </router-link>
          </li>
          <li class="nav-item" v-if="$store.state.usuario">
            <!-- Enlace para cerrar sesión (visible solo si el usuario ha iniciado sesión) -->
            <a class="nav-link" @click="cerrarSesion">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Nueva barra de búsqueda e icono -->
  <nav class="navbar navbar-expand-lg navbar-md bg-light navbar-light">
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <!-- Icono en el medio -->
      <span class="navbar-brand">
        <img id="Icono" class="img-fluid" src="@/assets/logo.png" alt="Icono" />
      </span>
      <!-- Barra de búsqueda -->
      <form class="d-flex" @submit.prevent="buscarLibros">
        <input
          type="text"
          v-model="buscar"
          class="form-control"
          placeholder=""
        />
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
  <div></div>
  <!-- Tercer navbar -->
  <nav
    class="navbar navbar-expand-lg navbar-md bg-light navbar-light border-top"
  >
    <div class="container-fluid d-flex flex-wrap justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/novedades" class="nav-link">Novedades</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mas-vendidos" class="nav-link"
            >Más vendidos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/recomendados" class="nav-link"
            >Recomendados</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/noticias-eventos" class="nav-link"
            >Noticias/Eventos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ofertas" class="nav-link">Ofertas</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// Exporta el componente Vue llamado "Icono"
export default {
  name: "Icono",
  // Lógica que se ejecuta al crear el componente
  created() {
    // Llama a la acción para cargar la lista de libros cuando se crea el componente
    this.$store.dispatch("cargarLibros");
  },
  // Datos del componente
  data() {
    return {
      // Estado para controlar si el menú de navegación está abierto o cerrado
      isNavbarOpen: false,
    };
  },
  // Propiedades calculadas (valores derivados de los datos)
  computed: {
    libros() {
      // Devuelve la lista de libros del estado de la tienda o un array vacío si no está definida
      return this.$store.state.libros || [];
    },
  },
  // Métodos (funciones)
  methods: {
    // Función para alternar la apertura y cierre del menú de navegación
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    // Función para cerrar la sesión del usuario
    cerrarSesion() {
      // Llama a la mutación para limpiar el nombre de usuario
      this.$store.commit("clearUsuario");
      // Redirige al usuario a la página de inicio o a donde desees
      this.$router.push("/");
    },
    // Función para realizar la búsqueda de libros
    buscarLibros() {
      // Verifica si la lista de libros está definida en el estado de la tienda
      if (this.$store.state.libros) {
        // Filtra la lista completa de libros localmente según la búsqueda
        const librosFiltrados = this.$store.state.libros.filter((libro) => {
          return libro.titulo.toLowerCase().includes(this.buscar.toLowerCase());
        });

        // Redirige a la vista de resultados y pasa los libros filtrados como parámetro de consulta
        this.$router.push({
          name: "resultadosbusqueda",
          query: { libros: JSON.stringify(librosFiltrados) },
        });
      } else {
        // Muestra un mensaje de error si la lista de libros no está definida
        console.error("La lista de libros no está definida en el estado de la tienda.");
        // Puedes manejar esto de acuerdo a tus necesidades, por ejemplo, mostrando un mensaje al usuario.
      }
    },
  },
};
</script>

<style scoped>
.bg-custom {
  background-color: #1a081f;
  font-size: 12px;
}

/* Ajusta el tamaño del icono según tus necesidades */
#Icono {
  max-height: 60px;
}
.carrito-cantidad {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  position: relative;
  top: 0;
  right: 0;
}
</style>
