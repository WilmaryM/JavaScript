
class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){
        return this_nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this.sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;

    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento = departamento;
    }

    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this._departamento}`;
    }
}

//como determinar un tipo
function determinarTipo(tipo){
    console.log( tipo.obtenerDetalles() );
    //polomorfismo o multiples formas.
    if(tipo instanceof Gerente){
        //iniciar con las clases de menor gerarquia
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    }

    else if(tipo instanceof Empleado){
        console.log( 'Es de tipo Empleado');
        console.log(tipo._departamento);
        console.log(tipo._sueldo);
    }

    else if( tipo instanceof Object){
        console.log( 'Es tipo object'); 
    }
}

let empleado1 = new Empleado('Fabio', 8000);
let gerente1 = new Gerente('Carlos', 5000,'Sistemas');

determinarTipo( empleado1 );
determinarTipo( gerente1 );
