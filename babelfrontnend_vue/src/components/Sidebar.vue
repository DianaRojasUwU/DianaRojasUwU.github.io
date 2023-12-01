<template>
  <div id="app">
    <!-- Barra lateral -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Dashboard</h3>
      </div>

      <ul class="list-unstyled components">
        <li class="">
          <router-link to="/vistaAdmin/ListarUsuario" class="button">
            <span class="text">Usuarios</span>
          </router-link>
        </li>
        <li class="">
          <router-link to="/vistaAdmin/ListarRol" class="button">
            <span class="text">Roles</span>
          </router-link>
        </li>
        <li class="">
          <router-link to="/vistaAdmin/ListarLibro" class="button">
            <span class="text">Libros</span>
          </router-link>
        </li>
        <li class="">
          <router-link to="/vistaAdmin/ListarEventoNoticia" class="button">
            <span class="text">Eventos y Noticias</span>
          </router-link>
        </li>
        <li class="">
          <router-link to="/vistaAdmin/ListarCategoria" class="button">
            <span class="text">Categorias</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Contenido principal -->
    <div id="content">
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


<style scoped>
#app {
  display: flex;
}

#sidebar {
  width: 250px;
  background: #fff;
  padding-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: width 0.3s ease, border-radius 0.3s ease;
}

#sidebar:hover {
  width: 280px;
  border-radius: 15px;
}

#sidebar .sidebar-header {
  text-align: center;
}

#sidebar ul.components {
  padding: 20px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

#sidebar ul li a:hover {
  background-color: #e0e0e0;
  color: #333;
}

#sidebar ul li.active {
  background-color: #4caf50;
  color: #fff;
}

#content {
  margin-top: 20px;
  margin-left: 250px;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

@media (max-width: 768px) {
  #app {
    flex-direction: column;
    align-items: stretch;
  }

  #sidebar {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    position: static;
    padding-top: 10px;
  }

  #sidebar:hover {
    width: 100%;
  }

  #content {
    margin-top: 0;
    margin-left: 0;
  }
}
</style>
