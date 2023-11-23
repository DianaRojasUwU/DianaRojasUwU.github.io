import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    libros: null, // Inicialmente, la lista de libros está indefinida
    usuario: null,
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
  },
});
