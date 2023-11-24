<template>
    <nav class="navbar navbar-expand-lg navbar-md bg-custom navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="{ 'collapse': !isNavbarOpen, 'navbar-collapse': true }" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/contacto" class="nav-link">Contacto</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/quienessomos" class="nav-link">Quiénes somos</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Búsqueda Avanzada</a>
            </li>
          </ul>
          <!-- Puedes mostrar la cantidad de elementos en el carrito en la barra de navegación -->
          <router-link to="/carrito" class="nav-link">Carrito ({{ $store.state.carrito.length }})</router-link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link v-if="$store.state.usuario" :to="'/usuario/' + $store.state.usuario" class="nav-link">
        {{ $store.state.usuario }}
      </router-link>
      <router-link v-else to="/iniciosesion" class="nav-link">Mi cuenta</router-link>
    </li>
    <li class="nav-item" v-if="$store.state.usuario">
      <a class="nav-link" @click="cerrarSesion">Cerrar Sesión</a>
    </li>
  </ul>
        </div>
      </div>
    </nav>
    <!-- Nueva barra de búsqueda e icono -->
    <nav class="navbar navbar-expand-lg navbar-md bg-light navbar-light">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- Icono en el medio -->
      <span class="navbar-brand">
        <img id="Icono" class="img-fluid" src="@/assets/logo.png" alt="Icono" />
      </span>
      <!-- Barra de búsqueda -->
      <form class="d-flex" @submit.prevent="buscarLibros">
  <input type="text" v-model="buscar" class="form-control" placeholder=""/> 
  <button class="btn btn-outline-success" type="submit">Buscar</button>
</form>
    </div>
  </nav>
  <div></div>
   <!-- Tercer navbar -->
   <nav class="navbar navbar-expand-lg navbar-md bg-light navbar-light border-top">
      <div class="container-fluid d-flex flex-wrap justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/libros" class="nav-link">Libros</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/novedades" class="nav-link">Novedades</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mas-vendidos" class="nav-link">Más vendidos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/recomendados" class="nav-link">Recomendados</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/noticias-eventos" class="nav-link">Noticias/Eventos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ofertas" class="nav-link">Ofertas</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
  
<script>
export default {
  name: 'Icono',
  created() {
    // Llama a la acción para cargar la lista de libros cuando se crea el componente
    this.$store.dispatch('cargarLibros');
  },
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  computed: {
    libros() {
      return this.$store.state.libros || [];
    },
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    cerrarSesion() {
      // Llama a la mutación para limpiar el nombre de usuario
      this.$store.commit('clearUsuario');
      // Redirige al usuario a la página de inicio o a donde desees
      this.$router.push('/');
    },
    buscarLibros() {
  // Verifica si la lista de libros está definida en el estado de la tienda
  if (this.$store.state.libros) {
    // Filtra la lista completa de libros localmente según la búsqueda
    const librosFiltrados = this.$store.state.libros.filter(libro => {
      return libro.titulo.toLowerCase().includes(this.buscar.toLowerCase());
    });

    // Redirige a la vista de resultados y pasa los libros filtrados como parámetro de consulta
    this.$router.push({ name: 'resultadosbusqueda', query: { libros: JSON.stringify(librosFiltrados) } });
  } else {
    console.error('La lista de libros no está definida en el estado de la tienda.');
    // Puedes manejar esto de acuerdo a tus necesidades, por ejemplo, mostrando un mensaje al usuario.
  }
},
  },
};
</script>
  <style scoped>
  .bg-custom {
    background-color: #3C5154;
    font-size: 12px;
  }
  
  /* Ajusta el tamaño del icono según tus necesidades */
  #Icono {
    max-height: 60px;
  }
  </style>
  