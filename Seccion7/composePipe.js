const compse=(f,g)=>data=>f(g(data));
const pipe=(g,f)=>data=>g(f(data));

const sumar=(num)=>num*3;
const math=(num)=>Math.log(num);
const resultado=compse(math,sumar);

console.log(resultado(3))
//Arity Cantidad de parametros pasados a una funcion
