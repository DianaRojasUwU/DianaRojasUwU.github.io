<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content ">
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
    height: 100vh;
    // width: 100vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
h2{
	color: white;
}
a{
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