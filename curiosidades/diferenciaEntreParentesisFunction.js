//const x = () => {} // Does nothing
//const y = () => ({}) // returns an object
suma=(valor)=>({pepe:valor})//Con los parentesis() permite devolver un objeto con el valor pepe
suma=(valor)=>{pepe:valor}//sin el parentesis no retorna nada
suma=(valor)=>{ //otra forma de ahcerlo como si tuviera parentecis
    return {
        pepe:valor
    }
}

console.log(
    suma(3)) 