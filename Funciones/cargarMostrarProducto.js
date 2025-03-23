import { agregarInfoProducto } from "./agregarInfoProducto.js";

export function cargarMostrarProducto(productos, p, scrollPosition){
    console.log("Mostrando");
    const pboxid = p.dataset.id;
    const productoItem = productos.listaProductos[pboxid-1];
    const section = document.querySelector(".section-productos");


    const nuevaVentana = document.createElement("div");
    nuevaVentana.classList.add("nueva-ventana");
    const mostrarProducto = document.createElement("div");
    mostrarProducto.classList.add("mostrar-producto");

    const regresar = document.createRange().createContextualFragment(`
        <div class="regresar">
            <img src="./Assets/Icons/regresar.png" alt="" class="icon-regresar">
        </div>
        `)

    const iconregresar = regresar.querySelector(".icon-regresar");
    iconregresar.addEventListener("click", () => {

        nuevaVentana.remove();  //Cuando se haga click al regresar se borra obviamente la vista
        section.classList.remove("not-show");
    
        window.scrollTo({top: scrollPosition});
    })
    mostrarProducto.append(regresar);
    const nuevoBox = agregarInfoProducto(productoItem);
    
    mostrarProducto.append(nuevoBox);
    nuevaVentana.append(mostrarProducto);
    return nuevaVentana;
}