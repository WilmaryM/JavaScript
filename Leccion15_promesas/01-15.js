let miPromesa = new Promise((resolve, reject)=> {
    let expresion= false;
    //let expresion= true;
    if(expresion)
    resolve('Resolvio correcto');

    else
    reject('Se produjo un error');
});

let promesa = new Promise((resolve) =>{
    ///console.log('Inicio de promesa');
    setTimeout( ()=> resolve('Saludos con promesa y timeout'), 3000);
    //console.log('Fin de la promesa');
});

//promesa.then(valor => console.log(valor));

//(3)
//async indica que ua funcion regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor) );

//async/ await

async function FuncionConPromesYAwait(){
    let miPromesa = new Promise( resolve =>{
        resolve('Promesa con await')
    });

    console.log( await miPromesa );
}

//FuncionConPromesYAwait();


//await, async, setTimeout
async function FuncionConPromesaAwaitTimeout(){
    console.log('Inicio de la funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    })
    console.log( await miPromesa );
    console.log('Fin de la funcion');
}

FuncionConPromesaAwaitTimeout();