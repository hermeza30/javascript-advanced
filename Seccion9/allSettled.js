const prom1=new Promise((resolve,reject)=>
    setTimeout(resolve,2000)
)
const prom2=new Promise((resolve,reject)=>
    setTimeout(reject,3000)
)
Promise.allSettled([prom1,prom2]).then(console.log).catch(console.log)