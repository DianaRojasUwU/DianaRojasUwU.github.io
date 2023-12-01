<template>
    <div>
      <div class="card">
        <div class="row">
          <div class="col">
            <h5 class="my-2 mr-md-auto font-weight-normal"></h5>
          </div>
          <div class="col-md-8">
            <h5 class="my-2 mr-md-auto font-weight-normal" style="align-items: center;">Eventos y Noticias</h5>
          </div>
          <div class="col col-lg-2">
            <h5 class="my-2 mr-md-auto font-weight-normal">
              <button type="button" v-on:click="agregarEventoNoticia()" class="btn btn-warning">Agregar</button>
            </h5>
          </div>
        </div>
  
        <div class="card_body">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Fin</th>
                <th>Ubicación</th>
                <th>Imagen</th>
                <th>Enlace</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="eventoNoticia in eventosNoticias" :key="eventoNoticia.id">
                <td>{{ eventoNoticia.id }}</td>
                <td>{{ eventoNoticia.titulo }}</td>
                <td>{{ eventoNoticia.descripcion }}</td>
                <td>{{ formatoFecha(eventoNoticia.fechaInicio) }}</td>
                <td>{{ formatoFecha(eventoNoticia.fechaFin) }}</td>
                <td>{{ eventoNoticia.ubicacion }}</td>
                <td>
                  <img :src="eventoNoticia.imagen" alt="Imagen del evento o noticia" style="max-height: 50px;" />
                </td>
                <td>
                  <a :href="eventoNoticia.enlace" class="btn btn-success">Enlace</a>
                </td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="editarEventoNoticia(eventoNoticia.id)" class="btn btn-warning">Editar</button>
                  </div>
                </td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="borrarEventoNoticia(eventoNoticia.id)" class="btn btn-danger">Eliminar</button>
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
        eventosNoticias: [],
      };
    },
    created() {
      this.consultarEventosNoticias();
    },
    methods: {
      consultarEventosNoticias() {
        axios.get("https://localhost:7102/api/eventosnoticias")
          .then(result => {
            this.eventosNoticias = result.data;
            console.log(result.data);
          })
          .catch(error => {
            console.error(error.response.data);
          });
      },
      borrarEventoNoticia(id) {
        console.log(id);
  
        axios.delete("https://localhost:7102/api/eventosnoticias/" + id)
          .then(() => {
            // Redirige después de la eliminación
            window.location.href = "ListarEventoNoticia";
          })
          .catch(error => {
            console.error(error.response.data);
          });
      },
      editarEventoNoticia(id) {
        console.log(id);
        this.$router.push("/EditarEventoNoticia/" + id);
      },
      agregarEventoNoticia() {
        window.location.href = "AgregarEventoNoticia";
      },
      formatoFecha(fecha) {
        return new Date(fecha).toLocaleString();
      },
    },
  };
  </script>
  
  <style>
  span {
    color: black;
  }
  </style>
  