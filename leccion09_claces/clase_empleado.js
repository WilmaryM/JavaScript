class Empleado extends Persona{
    constructor( nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Persona.contadorPersona;
        this._sueldo = sueldo;
    }
    get IdEmpleado(){
        return this._idEmpleado
    }

    set idEmpleado(idEmpleado){
        this._idEmpleado = idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
   
   
        toString(){
            return `${super.toString()}, 
                    ${this._idEmpleado} 
                    ${this._sueldo}`;

        }


    }
