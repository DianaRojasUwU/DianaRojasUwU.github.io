<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="home">
      <br>
      <div class="container">
        <router-view/>
      </div>
      <br>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    FooterVue,
    Navbar,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 1rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.home .container {
  padding: 1rem; /* Ajuste el espaciado según sus necesidades */
}

@media (max-width: 768px) {
  nav {
    padding: 0.5rem; /* Espaciado reducido en dispositivos móviles */
  }

  .home .container {
    padding: 0.5rem; /* Espaciado reducido en dispositivos móviles */
  }
}
</style>
