export function cargarProductos(arr) {

    const sectionProductos = document.querySelector(".section-productos");
    const body = document.body;

    for (const p of arr.listaProductos) {
        console.log(p);
    }

    for (const producto of arr.listaProductos) {
        const insertar = document.createRange().createContextualFragment(`
        <div class="producto-box" data-id="${producto.id}">
          <figure class="figure-pbox">
            <img src=${producto.image} alt="" class="img-pbox">
          </figure>
          <div class="info-pbox">
            <div class="nombre-pbox">${producto.title}</div>
            <div class="descripcion-pbox">${producto.description}</div>
            <div class="precio-pbox">$${producto.price}</div>
          </div>
      </div>
  
        `)
        sectionProductos.append(insertar);

    }
}