class Entrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends Entrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `Raton: [IdRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

class Teclado extends Entrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}] `
    }

}

class Monitor{
    static contadorMonitor = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;

    }

    toString(){
        return `Monitor: [idMonitor ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`
    }
}

class Computadora{
    static  contadorComputadora = 0;

    constructor(nombre, monitor, teclado, raton){
    this._idComputadora = ++Computadora.contadorComputadora;
    this._nombre = nombre;
    this._monitor =  monitor;
    this._teclado = teclado;
    this._raton = raton;

}

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`
    }

}

class Orden{
    static contadorOrdenes = 0;

    constructor(computadora){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = ' ';
        for(let computadora of this._computadoras){
            computadorasOrden += ` \n ${computadora} `;
        }

        console.log(`Ordern: ${this._idOrden} Computadoras: ${computadorasOrden}`);
    }

    
}






let dispositivo1 = new Entrada('BluTooth', 'Dell');
console.log(dispositivo1);

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());

let teclado1 = new Teclado('BluTooth', 'MSI');
console.log(teclado1.toString());


let monitor1 = new Monitor('Hp', 15);
console.log(monitor1);


let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();