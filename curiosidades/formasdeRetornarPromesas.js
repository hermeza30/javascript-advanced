
const delay=(callback, ms)=>{
    return new Promise(resolve=>{
        setTimeout(callback,ms)
    })   
}
//Promise.resolve()
//Promise.reject()
//return new Promise((resolve,reject)=>{})

delay(()=>console.log("Hola pepe",4000))