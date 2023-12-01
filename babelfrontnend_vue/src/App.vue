<template>
  <Navbar></Navbar>
  <div class="home">
  <br>
  <div class="home container"> <!-- Agregamos la clase "container" -->
      <router-view/>
    </div>
  <br>
  </div>
  <FooterVue></FooterVue>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
