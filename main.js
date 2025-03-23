import { Productos } from "./Clases/Productos.js";
import { cargarMostrarProducto } from "./Funciones/cargarMostrarProducto.js";
import { cargarProductos } from "./Funciones/cargarProductos.js";
import { agregarEvento } from "./Funciones/clickiProductoBox.js";
import { agregarFuncionalidadCarrito } from "./Funciones/agregarFuncionalidadCarrito.js";


const carrito = document.querySelector(".carrito").classList.add("carrito-off");
const arr = new Productos();


setTimeout(() => {
  cargarProductos(arr);
  agregarEvento(arr);
  agregarFuncionalidadCarrito();


  
}, 1000);







