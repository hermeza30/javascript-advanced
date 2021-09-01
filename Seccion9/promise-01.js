const prom=new Promise((resolve,reject)=>{
    if(true){
        resolve('stuf');
    }        
    reject('error');
});

prom.then((res)=>{

}).catch((err)=>err).finally((f)=>f);


const prom2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'hi')
})
const prom3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'POKIIE')
})
const prom4=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,'POKIEE222')
})

Promise.all([prom2,prom3,prom4]).then(console.log)