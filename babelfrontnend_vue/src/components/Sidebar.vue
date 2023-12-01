<template>
  <div id="app">
    <!-- Barra lateral -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Dashboard</h3>
      </div>

      <ul class="list-unstyled components">
        <li class="active">
          <router-link to="/vistaAdmin/ListarUsuario" class="button">
            <span class="text">Usuarios</span>
          </router-link>
        </li>
        <li class="">
          <router-link to="/vistaAdmin/ListarRol" class="button">
            <span class="text">Roles</span>
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
  height: 100%;
  position: absolute;
  width: 250px;
  background: #fff;
  padding-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease, border-radius 0.3s ease;
  border-radius: 10px; /* Ajusta según tu preferencia */
}

#sidebar:hover {
  width: 280px;
  border-radius: 15px; /* Ajusta según tu preferencia */
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
  margin-left: 250px;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

#sidebar:hover + #content {
  margin-left: 280px;
}
</style>
