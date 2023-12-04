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
    min-height: 100vh;
  }

  .content {
    background-color: white;
    border-radius: 10px;
    margin: 6px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
    height: calc(80% - 10px);
  }

  .table {
    width: 100%; /* O ajusta el ancho que prefieras */
    max-width: 100%;
    table-layout: fixed;
  }

  .table th, .table td {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }


  @media (max-width: 768px) {
    .dashboard {
      grid-template-columns: 1fr;
    }

    .content {
      height: auto;
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
    --light: #f1f5f9;
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
</style>
