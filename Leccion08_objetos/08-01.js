let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    /*nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }*/


    nombreCompleto: function(titulo, tel){
        return titulo + ' :' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }

}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

/*uso de call para usar el metodo persona1.nombreCompleto 
con los datos de perona2*/

console.log(persona1.nombreCompleto('Lic', '8907653'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing', 9876543));

/*uso de apply para usar el metodo persona1.nombreCompleto 
con los datos de perona2*/
let arreglo = ['Ing', '87665433']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));