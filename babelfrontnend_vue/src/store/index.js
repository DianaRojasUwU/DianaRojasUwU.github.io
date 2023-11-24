import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    libros: null, // Inicialmente, la lista de libros está indefinida
    usuario: null,
    carrito: [],
  },
  mutations: {
    setLibros(state, libros) {
      state.libros = libros;
    },
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    clearUsuario(state) {
      state.usuario = null;
    },
    agregarAlCarrito(state, libro) {
      state.carrito.push(libro);
    },
    quitarDelCarrito(state, libroId) {
      state.carrito = state.carrito.filter(libro => libro.id !== libroId);
    },
    limpiarCarrito(state) {
      state.carrito = [];
    },
  },
  actions: {
    // Acción para cargar la lista de libros desde la API
    async cargarLibros({ commit }) {
      try {
        const response = await axios.get('https://localhost:7102/api/libros');
        commit('setLibros', response.data);
      } catch (error) {
        console.error('Error al cargar la lista de libros:', error);
      }
    },
    async comprarLibro({ state, commit }) {
      // Verificar si hay libros en el carrito
      if (state.carrito.length === 0) {
        console.warn('El carrito está vacío. No se puede realizar la compra.');
        return;
      }

      // Calcular el número total de libros comprados en el carrito
      const totalLibrosComprados = state.carrito.length;

      // Realizar la lógica de compra para cada libro en el carrito
      for (const libro of state.carrito) {
        try {
          // Realizar una solicitud PUT para actualizar la cantidad en stock
          await axios.put(`https://localhost:7102/api/libros/${libro.id}`, {
            id: libro.id,
            titulo: libro.titulo,
            autor: libro.autor,
            descripcion: libro.descripcion,
            precio: libro.precio,
            stock: libro.stock - totalLibrosComprados,
            categoriaID: libro.categoriaID,
            categoria: {
              id: libro.categoria.id,
              nombre: libro.categoria.nombre,
            },
          });

          // Realizar una solicitud GET para obtener la información actualizada del libro
          const response = await axios.get(`https://localhost:7102/api/libros/${libro.id}`);
          const libroActualizado = response.data;

          // Verificar si la obtención del libro fue exitosa antes de continuar
          if (response.status === 200) {
            // Realizar acciones adicionales si es necesario

            // Quitar el libro antiguo del carrito y agregar el libro actualizado
            commit('quitarDelCarrito', libro.id);
            commit('agregarAlCarrito', libroActualizado);
          } else {
            console.error('Error en la compra del libro:', response.data);
          }
        } catch (error) {
          console.error('Error al realizar la compra del libro:', error);

          if (error.response) {
            console.error('Detalles del error:', error.response.data);
          }
        }
      }

      // Después de la compra, puedes limpiar el carrito
      commit('limpiarCarrito');
      window.location.reload();

    },

  },
});
