'turtle'.padStart(10)
'turtle'.padEnd(10)

const fun=(...param)=>{
    console.log(param)
}
fun(1,2,3,4,5)

//Object keys

let obj={
    username0:'santa',
    username1:'santa1',
    username2:'santa2',
}

Object.keys(obj).forEach(k => {
    console.log(k,obj[k])//Puedo obtener el key y valor del objeto
});

//Object values
Object.values(obj).forEach((v)=>{
    console.log("value",v)//Solo el valor
})
//Object enries
Object.entries(obj).forEach((v)=>{
    console.log(v)//Devuelve un array [key,valor] por cada properti
})
//Object enries MAP
Object.entries(obj).map((value)=>{
    return value[1]+value[0].replace('username','peperoni');
})