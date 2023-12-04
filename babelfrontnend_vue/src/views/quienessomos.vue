<template>
  <div class="quienes-somos-container">
    <div class="quienes-somos-content">
      <div class="row">
        <div class="col-lg-6 order-lg-1 order-2">
          <div class="quienes-somos-text">
            <h2 class="section-heading text-uppercase mb-4 falling-letters">Quiénes Somos</h2>
            <p>Somos el lugar donde las palabras cobran vida, donde las historias se entrelazan y la imaginación no tiene límites. En Babel BookTown, nos dedicamos a brindarte una experiencia única de descubrimiento literario.</p>
            <p>Con una selección cuidadosamente curada de libros y un equipo apasionado de bibliófilos, estamos aquí para nutrir tu amor por la lectura y guiarte a través de un mundo lleno de conocimiento y aventuras.</p>
          </div>
        </div>
        <div class="col-lg-6 order-lg-2 order-1">
          <div class="quienes-somos-image">
            <img src="https://i.pinimg.com/564x/38/cc/a0/38cca0df5f934533a6e88803af60bcc7.jpg" alt="Imagen Quiénes Somos">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuienesSomos'
}
</script>

<style scoped>
.quienes-somos-container {
  background-color: #f8f9fa; /* Gris claro de fondo */
  padding: 80px 20px;
}

.quienes-somos-content {
  max-width: 1200px;
  margin: 0 auto;
}

.quienes-somos-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Bordes redondeados */
  margin-bottom: 20px;
}

.quienes-somos-text {
  text-align: left;
}

.section-heading {
  font-size: 2.5rem;
  color: #240047; /* Azul */
  position: relative;
}

.falling-letters {
  animation: falling 1s infinite linear;
}

@keyframes falling {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.quienes-somos-text p {
  font-size: 1.2rem;
  color: #495057; /* Gris oscuro */
  margin-bottom: 20px;
}
</style>
