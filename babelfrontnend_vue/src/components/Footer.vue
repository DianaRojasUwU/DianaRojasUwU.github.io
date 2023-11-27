<template>
  <!-- Contenedor principal -->
  <div class="container">
      <!-- Sección del pie de página -->
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <!-- Sección 1: Logotipo y Año de Copyright -->
          <div class="col mb-3">
              <!-- Enlace al inicio con el logotipo -->
              <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                  <span class="navbar-brand">
                      <!-- Logotipo -->
                      <img id="Icono" class="img-fluid" src="@/assets/logo.png" alt="Icono" />
                  </span>
              </a>
              <!-- Año de copyright -->
              <p class="text-body-secondary">© 2023</p>
          </div>

          <!-- Sección 2: Espacio vacío (puedes añadir contenido según sea necesario) -->
          <div class="col mb-3">
              <!-- Este espacio está actualmente vacío, puedes agregar contenido aquí si es necesario -->
          </div>

          <!-- Sección 3: Información de Contacto -->
          <div class="col mb-3">
              <!-- Título de la sección -->
              <h5>Contacto</h5>
              <!-- Lista de información de contacto -->
              <ul class="nav flex-column">
                  <!-- Entrada: Número de teléfono -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">(+52) 1 998 164 6071</a></li>
                  <!-- Entrada: Ubicación -->
                  <li class="nav-item mb-2"><a class="nav-link p-0 text-body-secondary">Cancún, Quintana Roo</a></li>
                  <!-- Otras entradas de información de contacto -->
              </ul>
          </div>

          <!-- Sección 4: Páginas Legales -->
          <div class="col mb-3">
              <!-- Título de la sección -->
              <h5>Páginas Legales</h5>
              <!-- Lista de enlaces a páginas legales -->
              <ul class="nav flex-column">
                  <!-- Entrada: Aviso Legal -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Aviso Legal</a></li>
                  <!-- Entrada: Política de Cookies -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Política de Cookies</a></li>
                  <!-- Entrada: Condiciones de venta -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Condiciones de venta</a></li>
                  <!-- Entrada: Política de privacidad -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Política de privacidad</a></li>
                  <!-- Otras páginas legales -->
              </ul>
          </div>

          <!-- Sección 5: Atención al Cliente -->
          <div class="col mb-3">
              <!-- Título de la sección -->
              <h5>Atención al cliente</h5>
              <!-- Lista de enlaces de atención al cliente -->
              <ul class="nav flex-column">
                  <!-- Entrada: Quiénes somos -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Quiénes somos</a></li>
                  <!-- Entrada: Pedidos especiales -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pedidos especiales</a></li>
                  <!-- Entrada: Formulario de desistimiento -->
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Formulario de desistimiento</a></li>
                  <!-- Otras entradas de atención al cliente -->
              </ul>
          </div>
      </footer>
  </div>
</template>

<script>
  // Componente Vue llamado "Footer"
  export default {
      name: 'Footer'
  }
</script>
