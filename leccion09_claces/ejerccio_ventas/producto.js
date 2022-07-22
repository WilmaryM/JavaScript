class Producto{
    static contadorProducto = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`; 
    }
}

class Orden{
    static contadorOrdernes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor (){
        this._idOrdern = ++Orden.contadorOrdernes; 
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }   
    
    get idOrdern(){
        this._idOrdern;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        //this._productos[this._contadorProductosAgregados++] = producto;
        }

        else{
         console.log('No se puede agregar más productos');
        }
    }
        //modo de calcualr las ventas
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; // totalventa = totalventa + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for( let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + ' ';
        }

        console.log(`Orden: ${ this._idOrdern}, Total: $${this.calcularTotal}, Productos: ${productosOrden}`);
    }
}



let producto1 = new Producto('Pantalon', 200 );
let producto2 = new Producto('Camisa', 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();





