<template>
  <section class="contact-us-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase mb-4">Contáctanos</h2>
          <p class="text-muted">¿Necesitas más información sobre nuestros productos o servicios? Estamos aquí para ayudarte.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="contact-info">
            <i class="bi bi-envelope-fill icon"></i>
            <p class="email">
              <strong>Correo Electrónico:</strong><br>
              <a href="mailto:booktown@babel.libros.mx">booktown@babel.libros.mx</a>
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12 text-center">
          <p class="text-muted">Agradecemos tu interés y preferencia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacto'
}
</script>

<style scoped>
.contact-us-section {
  padding: 80px 0;
}

.section-heading {
  font-size: 2.5rem;
  color: #333; /* Cambiado a un gris más oscuro */
}

.text-muted {
  color: #777; /* Gris más claro */
}

.contact-info {
  font-size: 1.2rem;
  margin-top: 1rem;
}

.icon {
  font-size: 3rem; /* Aumenté el tamaño del icono */
  margin-bottom: 1rem; /* Espaciado inferior */
  color: #007bff; /* Color azul */
  transition: color 0.3s ease;
}

.email {
  margin-top: 0.5rem; /* Espaciado superior para el correo electrónico */
}

a {
  color: #007bff; /* Azul, puedes cambiarlo */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.icon:hover {
  color: #0056b3; /* Cambia el color del icono al hacer hover */
}
</style>
