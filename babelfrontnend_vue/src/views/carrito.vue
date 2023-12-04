<template>
  <div class="carrito-container">
    <h1 class="text-center mb-4">Carrito de Compra</h1>
    <ul class="libros-lista">
      <!-- Itera sobre los libros en el carrito -->
      <li v-for="libro in $store.state.carrito" :key="libro.id" class="libro-item">
        <div class="libro-info">
          <!-- Imagen del libro con estilo -->
          <img :src="libro.imagen" class="libro-imagen" :alt="libro.titulo">
          <!-- Detalles del libro -->
          <div class="libro-detalles">
            <h4 class="libro-titulo">{{ libro.titulo }}</h4>
            <p class="libro-precio">{{ libro.precio }}</p>
          </div>
        </div>
        <!-- Botón para quitar el libro del carrito -->
        <button @click="quitarDelCarrito(libro.id)" class="btn btn-danger">Quitar del Carrito</button>
      </li>
    </ul>
    <!-- Botón para realizar la compra con diseño adicional -->
    <button @click="comprarLibros" class="btn btn-success btn-comprar">Comprar</button>
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
      // Llama a la acción para realizar la compra y añade una animación
      this.$store.dispatch('comprarLibro');
      // Agrega una clase de animación temporal al botón
      const btnComprar = document.querySelector('.btn-comprar');
      btnComprar.classList.add('comprado-animation');
      // Remueve la clase después de la animación
      setTimeout(() => {
        btnComprar.classList.remove('comprado-animation');
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para la vista de carrito */
.carrito-container {
  padding: 20px;
}

.libros-lista {
  list-style-type: none;
  padding: 0;
}

.libro-item {
  border-bottom: 1px solid #ddd; /* Línea divisoria entre elementos */
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.libro-info {
  display: flex;
  align-items: center;
}

.libro-imagen {
  max-width: 80px;
  max-height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.libro-detalles {
  flex: 1;
}

.libro-titulo {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.libro-precio {
  color: #28a745; /* Verde */
  font-size: 1.2rem;
}

.btn-comprar {
  background-color: #28a745; /* Verde */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-comprar:hover {
  background-color: #218838; /* Verde más oscuro al pasar el mouse */
}

/* Animación para el botón de comprar */
.comprado-animation {
  animation: pulse 1s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
