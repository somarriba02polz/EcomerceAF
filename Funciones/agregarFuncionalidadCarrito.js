export function agregarFuncionalidadCarrito() {
    const carrito = document.querySelector(".carrito");
    const sectionProductos = document.querySelector(".section-productos");

    carrito.addEventListener("click", () => {

        /*Si la vista de mostrar producto esta activada o si el localStorage es vacio no voy a 
        mostrarte la infocarrito dahhhh*/ 
        if (localStorage.length == 0 || document.querySelector(".mostrar-producto")) {
            console.log("Vacio")
            return;
        }
        
        carrito.classList.add("not-show");
        
        const keys = Object.keys(localStorage);
        const itemsLocalS = keys.map(e => JSON.parse(localStorage.getItem(e)));

        const divcarrito = document.createRange().createContextualFragment(`
            <div class="div-carrito">
                <div class="title-cerrar">
                    <div class="title">Lista de productos 🛒</div>
                    <div class="cerrar-carrito">X</div>
                </div>
                <div class="div-info-carrito"></div>
            </div>
            `);

    
        const cerrarVista = divcarrito.querySelector(".cerrar-carrito");
        cerrarVista.addEventListener("click", (event)=> {
            const ancestro = event.target.closest(".div-carrito");
            ancestro.remove();
            carrito.classList.remove("not-show");
            if(localStorage.length == 0){
                carrito.classList.add("carrito-off");
            }
            
        })

        const divinfocarrito = divcarrito.querySelector(".div-info-carrito");

        document.body.append(divcarrito);           /*Agrego la caja del div carrito pero aun no la lleno*/

        itemsLocalS.forEach(item => {
            console.log(item);
            const nuevo = document.createRange().createContextualFragment(`
                    <div class="fila-productos">
                        <div class="nombre-producto">${item.nombre}</div>
                        <div class="precio-producto">${item.precio}</div>
                        <div class="quitar"><</div>
                    </div>
            `)
            const quitar = nuevo.querySelector(".quitar");
            quitar.addEventListener("click", (event)=> {
                localStorage.removeItem(item.id);        /*Obvio limpio el Storage o si no dahhh*/
                const padre = event.target.parentNode;   
                padre.remove();                         /*Y obvio quito al padre o a esta fila*/ 
            })
            divinfocarrito.append(nuevo);
        })

    })
}