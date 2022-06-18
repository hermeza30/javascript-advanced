const target={
    mensaje1:"uno",
    mensaje:"dos"
}
const handler={
    get:(target, prop, receiver)=>{
        if(prop==='mensaje1'){
            return "Actuando proxy"
        }
        return Reflect.get(...arguments);
    }
}
const proxy1=new Proxy(target,handler)

console.log(proxy1.mensaje)
console.log(proxy1.mensaje1)