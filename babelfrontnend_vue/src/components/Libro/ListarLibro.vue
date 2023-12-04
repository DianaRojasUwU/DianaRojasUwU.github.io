<template>
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-md-8">
          <h5 class="my-2 mr-md-auto font-weight-normal">Libros</h5>
        </div>
        <div class="col col-lg-2">
          <h5 class="my-2 mr-md-auto font-weight-normal">
            <router-link :to="{ path: '/vistaAdmin/AgregarLibro' }" class="btn btn-warning">Agregar</router-link>
          </h5>
        </div>
      </div>

      <div class="card_body">
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoría</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="libro in paginatedLibros" :key="libro.id">
                <td>{{ libro.id }}</td>
                <td>{{ libro.titulo }}</td>
                <td>{{ libro.autor }}</td>
                <td>
                  <button @click="mostrarModal(libro.descripcion)">Descripción</button>
                </td>
                <td>
                  <button @click="mostrarImagenModal(libro.imagen)">Imagen</button>
                </td>
                <td>{{ libro.precio }}</td>
                <td>{{ libro.stock }}</td>
                <td>{{ libro.categoria.nombre }}</td>

                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <router-link :to="{ path: '/vistaAdmin/EditarLibro/' + libro.id }" class="btn btn-warning">Editar</router-link>
                  </div>
                </td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="borrarLibro(libro.id)" class="btn btn-danger">Eliminar</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
              <button class="page-link" @click="paginaAnterior">Anterior</button>
            </li>
            <li class="page-item" v-for="pageNumber in pages" :key="pageNumber" :class="{ 'active': currentPage === pageNumber }">
              <button class="page-link" @click="cambiarPagina(pageNumber)">{{ pageNumber }}</button>
            </li>
            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
              <button class="page-link" @click="paginaSiguiente">Siguiente</button>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Modal para Descripción -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span @click="cerrarModal" class="close">&times;</span>
          <p>{{ modalInfo }}</p>
        </div>
      </div>

      <!-- Modal para Imagen -->
      <div v-if="showImagenModal" class="modal">
        <div class="modal-content">
          <span @click="cerrarImagenModal" class="close">&times;</span>
          <p>{{ modalImagen }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      libros: [],
      modalInfo: "",
      showModal: false,
      modalImagen: "",
      showImagenModal: false,
      itemsPerPage: 5, // Número de elementos por página
      currentPage: 1, // Página actual
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.libros.length / this.itemsPerPage);
    },
    pages() {
      const pagesArray = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    },
    paginatedLibros() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.libros.slice(start, end);
    },
  },
  created() {
    this.consultarLibros();
  },
  methods: {
    consultarLibros() {
      axios.get("https://localhost:7102/api/libros")
        .then((result) => {
          this.libros = result.data;
          console.log(result.data);
        });
    },
    borrarLibro(id) {
      axios.delete("https://localhost:7102/api/libros/" + id)
        .then(() => {
          // Redirige después de la eliminación
          this.consultarLibros();
        });
    },
    mostrarModal(info) {
      this.modalInfo = info;
      this.showModal = true;
    },
    cerrarModal() {
      this.showModal = false;
    },
    mostrarImagenModal(imagen) {
      this.modalImagen = imagen;
      this.showImagenModal = true;
    },
    cerrarImagenModal() {
      this.showImagenModal = false;
    },
    cambiarPagina(pageNumber) {
      this.currentPage = pageNumber;
    },
    paginaAnterior() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    paginaSiguiente() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
/* Agrega estilos CSS para el modal según tus necesidades */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.card_body {
  overflow-x: auto;
}

</style>
