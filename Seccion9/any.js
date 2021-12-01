const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("A"),Math.floor(Math.random()*1))
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("B"),Math.floor(Math.random()*1))
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("C"),Math.floor(Math.random()*1))
})


const ejecutar=async ()=>{
    const result=await Promise.any([p1,p2,p3]);
    console.log("Result",result)
}
ejecutar();