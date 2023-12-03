<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/1.svg" class="d-block w-100" alt="Slide 1">
      </div>
      <div class="carousel-item">
        <img src="../assets/2.svg" class="d-block w-100" alt="Slide 2">
      </div>
      <div class="carousel-item">
        <img src="../assets/3.svg" class="d-block w-100" alt="Slide 3">
      </div>
      <div class="carousel-item">
        <img src="../assets/4.svg" class="d-block w-100" alt="Slide 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Contacto'
}
</script>
<style>
.carousel-item img {
  max-height: 500px;
  object-fit: fill;
}

@media (max-width: 768px) {
  .carousel-item img {
    max-height: 300px; /* Ajusta la altura deseada para dispositivos móviles */
  }
}
</style>