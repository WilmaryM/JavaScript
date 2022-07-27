let mifuncion = function (){
    console.log('Saludos desde mi funcion');
}
// al usar let para nuestra funcion no podemos ponerla al principio de la hoja de codigos(hosting).
//-----------------------------------------
// const mifuncionFlecha = () =>{
//     console.log('Saludos desde mi funcion Flecha')
// }

//const mifuncionFlecha = () =>  console.log('Saludos desde mi funcion Flecha');

//mifuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde funcion flecha';
// }

const saludar = ()=> 'Saludos desde funcion flecha';

console.log(saludar());

const regresarObjeto = () =>({nombre: 'Juan', apellido: 'Lara'});
console.log(regresarObjeto());


const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}


//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Saludos con paramentros');


//const funcionConVariosParametros = (op1, op2) => (op1 + op2); operaciones simples

const funcionConVariosParametros = (op1, op2) =>{
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;

    //este se utiliza con operaciones complicadas
}

console.log(funcionConVariosParametros(3,6));
