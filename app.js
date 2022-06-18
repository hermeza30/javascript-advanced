//currying map list
let lista=[{"name":"uno"},{"name":"dos"}];


const curry=(propiedad)=>objRef=>objRef[propiedad];
const get=curry('name')

const currymap=(fn)=>(lista)=>lista.map(fn);
const map=currymap(get)
console.log(map(lista))
