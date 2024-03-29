import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Products from "../views/Products.vue"
import Recetas from "../views/Recetas.vue"
import Encuentranos from "../views/Encuentranos.vue"
import Login from "../views/Login.vue"
import PanelDeControl from "../views/PanelDeControl.vue"
import VistaReceta from "../views/VistaReceta.vue"
import VistaProducto from "../views/VistaProducto.vue"

//Prueba de fetch
import AdminProductos from "../views/AdminProductos.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/products/:tipo",
    name: "Products",
    component: Products

  },
  {
    path: "/verProducto/:productoId",
    name: "VistaProducto",
    component: VistaProducto
  },
  {
    path: "/recetas",
    name: "Recetas",
    component: Recetas
  },
  {
    path: "/recetas/:recetaId",
    name: "VistaReceta",
    component: VistaReceta
  },
  {
    path: "/encuentranos", 
    name: "Encuentranos",
    component: Encuentranos
  },
  {
    path: "/accessAdmin",
    name: "AccessAdmin",
    component: Login,

  },
  { 
    path: "/AdminProductos",
    name: "AdminProductos",
    component: AdminProductos,

  },
  {
    path: "/PanelDeControl",
    name: "PanelDeControl",
    component: PanelDeControl,


  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
