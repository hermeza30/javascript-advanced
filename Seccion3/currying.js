const mul=(a,b)=>{
    return a*b;
}

const store=mul.bind(this,2);
store(4);
store(5);
store(6);
store(7);
//currying map con funcion. de busqueda
const curry=(propiedad)=>objRef=>objRef[propiedad];

let lista=[{"name":"uno"},{"name":"dos"}];

const get=curry('name')

console.log(lista.map(curry('name')))
console.log(lista.map(get))

//currying map list
let lista=[{"name":"uno"},{"name":"dos"}];


const curry=(propiedad)=>objRef=>objRef[propiedad];
const get=curry('name')

const currymap=(fn)=>(lista)=>lista.map(fn);
const map=currymap(get)
console.log(map(lista))
