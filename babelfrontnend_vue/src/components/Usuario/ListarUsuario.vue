<template>
    <div>
      <div class="card">
        <div class="row">
            <div class="col">
                 <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
            </div>
            <div class="col-md-8">
               <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Usuarios</h5>
            </div>
            <div class="col col-lg-2">
               <h5 class="my-2 mr-md-auto font-weight-normal">                
                <button type="button" v-on:click="agregarUsuario()" class="btn btn-warning">Agregar</button>                
              </h5>
            </div>
         </div>
        
        
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Contraseña</th>
                <th>Correo Electronico</th>                
                <th>Rol</th>                
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in Usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.contrasena }}</td>
                <td>{{ usuario.correoElectronico }}</td>
                <td>{{ usuario.rol.rolNombre }}</td>
                
                <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarUsuario(usuario.id)" class="btn btn-warning">Editar</button>
                </div>
                </td>           
                <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarUsuario(usuario.id)" class="btn btn-danger">Eliminar</button>
                </div>
                </td>           
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Usuarios: [],
    };
  },
  created() {
    this.consultarUsuarios();
  },
  methods: {
    consultarUsuarios() {
      axios.get("https://localhost:7102/api/usuarios").then((result) => {
        this.Usuarios = result.data;
        console.log(result.data);
      });
    },
    borrarUsuario(id) {
      console.log(id);

      axios.delete("https://localhost:7102/api/usuarios/" + id).then(() => {
        // Redirige después de la eliminación
        window.location.href = "ListarUsuario";
      });
    },
    editarUsuario(id) {
      console.log(id);
      this.$router.push("/EditarUsuario/" + id);
    },
    agregarUsuario()
    {
      window.location.href = "AgregarUsuario";
    },
  },
};
</script>

<style>
span{
  color: black;
}
</style>