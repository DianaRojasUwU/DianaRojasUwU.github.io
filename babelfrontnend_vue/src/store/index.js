// En store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    usuario: null,
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    clearUsuario(state) {
      state.usuario = null;
    },
  },
  actions: {
    // Puedes agregar acciones aquí si necesitas realizar operaciones asincrónicas
  },
  modules: {
    // Puedes dividir tu store en módulos si es necesario
  },
});
