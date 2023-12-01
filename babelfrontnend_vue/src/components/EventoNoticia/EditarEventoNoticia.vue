<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Evento o Noticia</div>
      <div class="card-body">
        <form v-on:submit.prevent="editarEventoNoticia">
          <div class="form-group">
            <label for="titulo">Título:</label>
            <input
              type="text"
              class="form-control"
              name="titulo"
              v-model="form.titulo"
              aria-describedby="helpId"
              id="titulo"
              placeholder="Título"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el título del evento o noticia</small
            >
          </div>
          <br />
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea
              class="form-control"
              name="descripcion"
              v-model="form.descripcion"
              aria-describedby="helpId"
              id="descripcion"
              placeholder="Descripción"
            ></textarea>
            <small id="helpId" class="form-text" text-muted
              >Ingresa la descripción del evento o noticia</small
            >
          </div>
          <br />
          <div class="form-group">
            <label for="fechaInicio">Fecha de Inicio:</label>
            <input
              type="datetime-local"
              class="form-control"
              name="fechaInicio"
              v-model="form.fechaInicio"
              aria-describedby="helpId"
              id="fechaInicio"
              @input="removeSeconds"
            />
            <small id="helpId" class="form-text" text-muted
              >Selecciona la fecha de inicio</small
            >
          </div>
          <br />
          <div class="form-group">
            <label for="fechaFin">Fecha de Fin:</label>
            <input
              type="datetime-local"
              class="form-control"
              name="fechaFin"
              v-model="form.fechaFin"
              aria-describedby="helpId"
              id="fechaFin"
              @input="removeSeconds"
            />
            <small id="helpId" class="form-text" text-muted
              >Selecciona la fecha de fin</small
            >
          </div>
          <br />

          <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input
              type="text"
              class="form-control"
              name="ubicacion"
              v-model="form.ubicacion"
              aria-describedby="helpId"
              id="ubicacion"
              placeholder="Ubicación"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la ubicación del evento</small
            >
          </div>
          <br />
          <div class="form-group">
            <label for="imagen">Imagen:</label>
            <input
              type="text"
              class="form-control"
              name="imagen"
              v-model="form.imagen"
              aria-describedby="helpId"
              id="imagen"
              placeholder="URL de la imagen"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la URL de la imagen del evento</small
            >
          </div>
          <br />
          <div class="form-group">
            <label for="enlace">Enlace:</label>
            <input
              type="text"
              class="form-control"
              name="enlace"
              v-model="form.enlace"
              aria-describedby="helpId"
              id="enlace"
              placeholder="Enlace"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el enlace del evento o noticia</small
            >
          </div>
          <br />
          <div class="btn-group" role="group">
            <button type="submit" class="btn btn-success">Editar</button>
            <router-link
              :to="{ path: '/vistaAdmin/ListarEventoNoticia' }"
              class="btn btn-danger"
              >Cancelar</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditarEventoNoticia",
  data() {
    return {
      id: null,
      form: {
        titulo: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: "",
        ubicacion: "",
        imagen: "",
        enlace: "",
      },
    };
  },
  methods: {
    editarEventoNoticia() {
      axios
        .put("https://localhost:7102/api/eventosnoticias/" + this.id, this.form)
        .then((data) => {
          console.log(data);
          this.$router.push("/vistaAdmin/ListarEventoNoticia");
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    },
    removeSeconds(event) {
      // Función para eliminar los segundos del valor del input datetime-local
      if (event.target.value) {
        const withoutSeconds = event.target.value
          .split(":")
          .slice(0, -1)
          .join(":");
        this.form[event.target.name] = withoutSeconds;
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;

    axios
      .get("https://localhost:7102/api/eventosnoticias/" + this.id)
      .then((datos) => {
        this.form.titulo = datos.data.titulo;
        this.form.descripcion = datos.data.descripcion;
        this.form.fechaInicio = datos.data.fechaInicio;
        this.form.fechaFin = datos.data.fechaFin;
        this.form.ubicacion = datos.data.ubicacion;
        this.form.imagen = datos.data.imagen;
        this.form.enlace = datos.data.enlace;
        console.log(this.form);
      });
  },
};
</script>
