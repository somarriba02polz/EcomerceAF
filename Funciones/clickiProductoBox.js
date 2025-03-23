
import { cargarMostrarProducto } from "./cargarMostrarProducto.js";
export function agregarEvento(arr) {

    let scrollPosition = undefined;

    const items = document.querySelectorAll(".producto-box");
    const section = document.querySelector(".section-productos");



    for (const p of items) {
        p.addEventListener("click", () => {

            scrollPosition = window.pageYOffset;
            let ventana = cargarMostrarProducto(arr, p, scrollPosition);
            
            document.body.append(ventana);
            

            //Si esta la ventana de info carrito se cierra antes de entrar a detalle producto
            //y se restablece a carrito
            if(document.querySelector(".div-carrito")){
                document.querySelector(".div-carrito").remove();
                document.querySelector(".carrito").classList.remove("not-show");
            }
            section.classList.add("not-show");

            window.scrollTo({
                top: 0,
                // behavior: 'smooth'
            });
        })
    }
}
