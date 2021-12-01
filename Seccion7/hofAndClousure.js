//HOF high order function, recibe una funcion de parametro y retorna una funcion
const hof=()=>()=>5;
hof()();

const hof2=(fn)=>fn(5);
hof2( function asd(num){
    return num;
} );

//CLOUSURE, si tenemos una funcion padre y dentro de ella una una hija
// yla hija hace referencia a una variable del padre, se guarda esa variable
//en la memoria y se produce el llamado clousure.
//Los clousure me permiten hacer que no haya modificacion de estado de un objeto 
//ver video 120
function padre(){
    const nombre="pepe"
   return function hija(){
        console.log("nombre",nombre);
    }
}

const clousuref= function (){
    let count=0;
    return function increment(){
        count++;
    }
}
const peperoni = clousuref();
console.log(peperoni())
console.log(peperoni())
console.log(peperoni())

