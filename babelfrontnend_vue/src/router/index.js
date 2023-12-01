import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/iniciosesion',
    name: 'iniciosesion',
    component: () => import('../views/iniciosesion.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/registro.vue')
  },
  {
    path: '/quienessomos',
    name: 'quienessomos',
    component: () => import('../views/quienessomos.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/contacto.vue')
  },
  {
    path: '/libros/:id',
    name: 'detalleLibro',
    component: () => import('../views/vistapreventa.vue')
  },
  {
    path: '/resultados',
    name: 'resultadosbusqueda',
    component: () => import('../views/ResultadosBusqueda.vue')
  },
  {
    path: '/Carrito',
    name: 'Carrito',
    component: () => import('../views/carrito.vue')
  },
  {
    path: '/usuario/:nombre',
    name: 'usuario',
    component: () => import('../views/usuario.vue'),
    props: true,
    beforeEnter: async (to, from, next) => {
      try {
        // Hacer la llamada a la API para obtener la lista de usuarios
        const response = await axios.get('https://localhost:7102/api/usuarios');
        const usuarios = response.data;
    
        // Buscar el usuario específico por nombre
        const usuario = usuarios.find(u => u.nombre === to.params.nombre);
    
        if (usuario) {
          // Verificar el rol del usuario
          if (usuario.rol && usuario.rol.rolNombre !== 'admin') {
            // Continuar con la navegación si el rol no es admin
            next();
          } else {
            // Redirigir a otra vista si el rol es admin
            next({ name: 'vistaAdmin' }); // Cambia 'adminView' al nombre de tu vista para admin
          }
        } else {
          // Manejar el caso en el que no se encuentra el usuario
          console.error('Usuario no encontrado');
          // Puedes redirigir a una página de error o a otra vista según tus necesidades
          next({ name: 'usuarioNoEncontrado' });
        }
      } catch (error) {
        console.error('Error al obtener la lista de usuarios', error);
        // Manejar el error según tus necesidades
        next();
      }
    }
  },
  {
    path: '/vistaAdmin',
    name: 'vistaAdmin',
    component: () => import('../views/vistaAdmin.vue'),
    children: [
      {
        path: 'ListarUsuario',
        component: () => import('../components/Usuario/ListarUsuario.vue')
      },
      {
        path: 'AgregarUsuario',
        component: () => import('../components/Usuario/AgregarUsuario.vue')
      },
      {
        path: '/EditarUsuario/:id',
        component: () => import('../components/Usuario/EditarUsuario.vue')
      },
      {
        path: 'ListarRol',
        component: () => import('../components/Rol/ListarRol.vue')
      },
      {
        path: 'AgregarRol',
        component: () => import('../components/Rol/AgregarRol.vue')
      },
      {
        path: '/EditarRol/:id',
        component: () => import('../components/Rol/EditarRol.vue')
      },
      {
        path: 'ListarLibro',
        component: () => import('../components/Libro/ListarLibro.vue')
      },
      {
        path: 'AgregarLibro',
        component: () => import('../components/Libro/AgregarLibro.vue')
      },
      {
        path: 'EditarLibro/:id',
        component: () => import('../components/Libro/EditarLibro.vue')
      },
      {
        path: 'ListarEventoNoticia',
        component: () => import('../components/EventoNoticia/ListarEventoNoticia.vue')
      },
      {
        path: 'AgregarEventoNoticia',
        component: () => import('../components/EventoNoticia/AgregarEventoNoticia.vue')
      },
      {
        path: '/EditarEventoNoticia/:id',
        component: () => import('../components/EventoNoticia/EditarEventoNoticia.vue')
      },   
      {
        path: 'EditarLibro/:id',
        component: () => import('../components/Libro/EditarLibro.vue')
      },
      {
        path: 'ListarCategoria',
        component: () => import('../components/Categoria/ListarCategoria.vue')
      },
      {
        path: 'AgregarCategoria',
        component: () => import('../components/Categoria/AgregarCategoria.vue')
      },
      {
        path: '/EditarCategoria/:id',
        component: () => import('../components/Categoria/EditarCategoria.vue')
      },      
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
