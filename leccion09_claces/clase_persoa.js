
class Persona{

    static contadorPersona = 0;
    
    constructor( idPersona, nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        
    }
    get idPersona(){
        return this.idPersona;
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

    get edad(){
        return this.edad;
    }

    set edad(edad){
      this.edad = edad;
    }

    toString(){
        return `${this.idPersona}
                ${this._nombre}
                ${this._apellido} 
                ${this._edad}`;
 

    }
}