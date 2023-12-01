<template>
	<div class="dashboard">
	  <Sidebar/>
	  <div class="content">
		<router-view/>
	  </div>
	</div>
  </template>
  
  <script setup>
  import Sidebar from '../components/Sidebar.vue'
  </script>
  
  <style lang="scss">
  
  .dashboard {
	display: grid;
	grid-template-columns: 1fr 5fr;    
	min-height: 100vh; /* Ajuste mínimo de altura al 100% de la ventana */
  }
  
  .content {
	background-color: white;
	border-radius: 10px;
	margin: 6px 6px 0 6px; /* Elimina el margen inferior */
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	overflow-y: auto;
	height: calc(80% - 10px); /* Ajuste la altura al espacio restante */
  }
  @media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr; /* Cambia a una columna en dispositivos móviles */
  }

  .content {
    margin: 6px;
    height: auto; /* Altura automática en dispositivos móviles */
  }
}
  h2 {
	color: white;
  }
  
  a {
	text-decoration: none;
	color: white;
  }
  
  :root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
  }
  
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
  }
  
  body {
	background: var(--light);
  }
  
  button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
  }
  
  .app {
	display: flex;
  
	main {
	  flex: 1 1 0;
	  padding: 2rem;
  
	  @media (max-width: 1024px) {
		padding-left: 6rem;
	  }
	}
  }
  
  </style>
  