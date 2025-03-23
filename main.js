import { Productos } from "./Clases/Productos.js";
import { cargarMostrarProducto } from "./Funciones/cargarMostrarProducto.js";
import { cargarProductos } from "./Funciones/cargarProductos.js";
import { agregarEvento } from "./Funciones/clickiProductoBox.js";
import { agregarFuncionalidadCarrito } from "./Funciones/agregarFuncionalidadCarrito.js";

alert(`SOlo FUnciona el CArro, agregas y quitas
      Si aun no has agregado nada al carro no podes acceder al carro,
      si ya agregaste si podes acceder al carrito,
  .`);

alert("Si sos Alexis Fuck you, si no igual");

const carrito = document.querySelector(".carrito").classList.add("carrito-off");
const arr = new Productos();


setTimeout(() => {
  cargarProductos(arr);
  agregarEvento(arr);
  agregarFuncionalidadCarrito();


  
}, 1000);







