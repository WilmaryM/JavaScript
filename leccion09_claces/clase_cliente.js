

class cliente extends Persona{

    constructor(idCliente, fechaRegistro){
        super()
         this._idCliente =  ++Persona.contadorPersona;
         this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ', '+ this._idCliente + ' ' + this._fechaRegistro;
    }

}