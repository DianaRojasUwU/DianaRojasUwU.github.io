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
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
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
</style>
  