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
          <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/iniciosesion" class="nav-link">Mi cuenta</router-link>
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
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
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
    data() {
      return {
        isNavbarOpen: false
      };
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      }
    }
  }
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
  