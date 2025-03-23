const api = 'https://fakestoreapi.com/products'

export class Productos {
    async #getProductos(){

        try{
            const response = await fetch(api);

            if(!response.ok){
                throw new Error(`Ocurrio Error ok status: ${response.status}`);
            }
            
            const objJson = await response.json();
            console.log(objJson);
            return objJson;
        }
        catch(e){
            console.error(e);
        }
    }

    listaProductos;
    constructor() {
        this.#getProductos().then(r => this.listaProductos = r);
    }
}