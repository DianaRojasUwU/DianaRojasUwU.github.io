<template>
    <div>
      <a>Usuario</a>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data(){
        return{
            usuarios: [], // Agrega la lista de usuarios
        };
    },
    mounted() {
      // Llama a obtenerUsuarios cuando el componente se crea
      this.obtenerUsuarios();
    },
    methods: {
        async obtenerUsuarios() {
      try {
        // Realiza una solicitud GET para obtener la lista de usuarios desde la API
        const response = await axios.get("https://localhost:7102/api/usuarios");
        // Almacena la lista de usuarios en el estado local
        this.usuarios = response.data;
        // Muestra la lista de usuarios en la consola
        console.log("Lista de usuarios:", response);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    },
    }
  };
  </script>
  