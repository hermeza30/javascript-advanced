//JVR tiene dos fases la 
/**
 * HOSTING- Fase de creacion de variables y funciones declaration
 * esto lo hace antes de ejecutar
 * las declaration function son fully hoisted
 * las variables son partialy hoisted
 * RUN-- Fase de ejecucion de mi codigo en cada contexto
 */
console.log('1.....')
console.log(teddy)
console.log(sing())
var teddy='bear';//Se le asigna un espacio de memoria pero no se asigna su valor
function sing(){
    console.log("Hollalalalal")
    
}



console.log('2.....')
console.log(teddy)
console.log(sing())
const teddy='bear';//No se le asigna memoria a variables const y let y tampoco 
(function sing(){
    console.log("Hollalalalal")
})

console.log('2.....')
console.log(teddy)
console.log(sing2())//Se asigno en memoria pero no tiene un valor definido-dara error
const teddy='bear';//No se le asigna memoria a variables const y let y tampoco 
var sing2=function sing(){
    console.log("Hollalalalal")
};

