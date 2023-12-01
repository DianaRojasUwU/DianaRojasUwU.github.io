<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarUsuario">
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="form.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu nombre</small>
            </div><br>
            <div class="form-group">
              <label for="contrasena">Contraseña:</label>
              <input
                type="text"
                class="form-control"
                name="contrasena"
                id="contrasena"
                v-model="form.contrasena"
                aria-describedby="helpId"
                placeholder="Contraseña"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
            </div><br>
            <div class="form-group">
              <label for="correoElectronico">Correo Electronico:</label>
              <input
                type="text"
                class="form-control"
                name="correoElectronico"
                id="correoElectronico"
                v-model="form.correoElectronico"
                aria-describedby="helpId"
                placeholder="Correo Electronico"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu correo electronico</small>
            </div><br/>
            <div class="form-group">
              <label for="rol">Rol:</label>
              <select class="form-control" v-model="form.rol" id="rol">
                <option v-for="rol in roles" :key="rol.rolID" :value="rol.rolID">{{ rol.rolNombre }}</option>
              </select>
              <small id="helpId" class="form-text" text-muted>Selecciona tu rol</small>
            </div><br/>
            <div class="btn-group" role="group">
              <button type="submit" class="btn btn-success">Agregar</button>
              <router-link :to="{ path: '/vistaAdmin/ListarUsuario' }" class="btn btn-danger">Cancelar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Agregar",
    data() {
      return {
        form: {
          nombre: "",
          contrasena: "",
          correoElectronico: "",
          rol: "", // aquí debería ser el ID del rol
        },
        roles: [], // lista de roles
      };
    },
    methods: {
      agregarUsuario() {
        // Verifica que form.rol sea un número (ID del rol)
        if (typeof this.form.rol !== 'number') {
          // Puedes mostrar un mensaje de error o manejarlo de acuerdo a tus necesidades
          console.error('ID del rol no válido');
          return;
        }
  
        // Realiza la solicitud POST con la estructura correcta
        axios.post("https://localhost:7102/api/usuarios", {
          nombre: this.form.nombre,
          correoElectronico: this.form.correoElectronico,
          contrasena: this.form.contrasena,
          rolID: this.form.rol, // Utiliza el ID del rol
          rol: {
            rolID: this.form.rol,
            rolNombre: "" // Puedes dejarlo vacío o asignar el nombre si es necesario
          }
        })
        .then(data => {
          console.log(data);
          this.$router.push("/vistaAdmin/ListarUsuario");
        })
        .catch(error => {
          console.error(error.response.data);
        });
      },
    },
    mounted() {
      axios.get("https://localhost:7102/api/roles")
        .then(response => {
          this.roles = response.data; // asignar la lista de roles
        });
    },
  };
  </script>
  