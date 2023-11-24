<template>
    <div>
      <h1>Carrito de Compra</h1>
      <ul>
        <li v-for="libro in $store.state.carrito" :key="libro.id">
          {{ libro.titulo }} - {{ libro.precio }}
          <button @click="quitarDelCarrito(libro.id)">Quitar del Carrito</button>
        </li>
      </ul>
      <button @click="comprarLibros">Comprar</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      quitarDelCarrito(libroId) {
        // Llama a la mutación para quitar el libro del carrito
        this.$store.commit('quitarDelCarrito', libroId);
      },
      comprarLibros() {
        // Llama a la acción para realizar la compra
        this.$store.dispatch('comprarLibro');
      },
    },
  };
  </script>
  