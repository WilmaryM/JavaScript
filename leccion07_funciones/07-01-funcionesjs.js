//tipos primitivos
let x = 10;

//la varriable a fuera de la funcion no existe
function cambiarValor(a){
    a = 20;
}

//paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);

const persona ={
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//paso por referencia 
cambiarValorObjeto(persona);
console.log(persona);
