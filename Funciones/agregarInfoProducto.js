export function agregarInfoProducto(Producto) {

    const divinfodetallada = document.createRange().createContextualFragment(`
        
    <div class="div-detail">
    <div class="name-producto">${Producto.title}</div>
    <div class="div-img-info">
      <div class="div-imgC">
        <figure>
          <img src=${Producto.image} alt="">
        </figure>
        <div class="div-comprar">
          <div class="agregar">Agregar</div>
          <div class="mas">+</div>
          <div class="menos">-</div>
          <div class="display-cont">0</div>
        </div>
      </div>

      <div class="div-info">
        <div class="marca">Marca:  ${Producto.title}</div>
        <div class="precio">${Producto.price}</div>
        <div class="descripcion-producto">
          <div class="categoria">Categoria: ${Producto.category}</div>
          <div class="descripcion">
            ${Producto.description}
          </div>
        </div>

      </div>
    </div>

  </div>
        `)


        
  // Aqui lo del carrito
  const displayCont = divinfodetallada.querySelector(".display-cont");
  const menos = divinfodetallada.querySelector(".menos");
  const mas = divinfodetallada.querySelector(".mas");

  menos.addEventListener("click", ()=> {
    const value = displayCont.textContent;
    if(value== 0){
      return;
    }
    displayCont.textContent = Number(value) -1;
  })

  mas.addEventListener("click", ()=> {
    const value = displayCont.textContent;
    displayCont.textContent = Number(value) +1;
  })


  const agregar = divinfodetallada.querySelector(".agregar");
  agregar.addEventListener("click", ()=> {
    
    if(displayCont.textContent == 0){
      return;
    }
    if(document.querySelector(".carrito").classList.contains("carrito-off")){
      document.querySelector(".carrito").classList.remove("carrito-off");
    }
    const productoC  = {
      id: Producto.id,
      precio: Producto.price,
      nombre: Producto.title,
      img: Producto.image,
      cantidad: displayCont.textContent,
      totalCarrito: (Producto.price * displayCont.textContent)
    }
    if(!localStorage.getItem(Producto.id)){
      localStorage.setItem(Producto.id, JSON.stringify(productoC));
      console.log(productoC);
      return;
    }
    console.log("Ya estaba guardado")
    localStorage.setItem(Producto.id, JSON.stringify(productoC))


    return;
  })
    return divinfodetallada;
    
}