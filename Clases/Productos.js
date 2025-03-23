const api = 'https://fakestoreapi.com/products'

export class Productos {
    async #getProductos(){

        try{
            const response = await fetch(api);

            if(!response.ok){
                throw new Error(`Ocurrio Error ok status: ${response.status}`);
            }
            // return await response.json();
            return await response.json()
        }
        catch(e){
            console.log(e);
        }
    }

    listaProductos;
    constructor() {
        this.#getProductos().then(r => this.listaProductos = r);
    }
}