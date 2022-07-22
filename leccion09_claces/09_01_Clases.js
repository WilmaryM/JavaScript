

class Persona{

    static contadorPersona = 0;//Atributo de nuesta clase

    static get MAX_OBj(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if( Persona.contadorPersona < Persona.MAX_OBj){
        this.idPersona = ++Persona.contadorPersona;}

        else{
            console.log( 'Se han superado el maximo permitidos');
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Objeto)
    toString(){
        //se aplica poliformismo(MUltiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una refrencia de tipo padre
        //o de tipo hijo
        return this.nombreCompleto();
    }

    
}


class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)//llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobrescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenes', 'Sistemas');
console.log(empleado1.toString());

let persona2 = new Empleado('Karla', 'Ramirez');
console.log(persona2.toString());

console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBj);

let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando','Toledo');

//Se han superado el maximo permitidos 
let persona5 = new Persona('Amanda','Ledo');




