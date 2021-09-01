const promisify=(item,delay)=>{
   return  new Promise((resolve)=>setTimeout(()=>{resolve(item)},delay))
}
const a=()=>promisify('a',100);
const b=()=>promisify('b',200);
const c=()=>promisify('c',300);

async function parallel(){//No retorna hasta que todas las promesas se resuelvamn
    const promises=[a(),b(),c()]
    const [out1,out2,out3]=await Promise.all(promises);
    return `parallel is done: ${out1} - ${out2} - ${out3}`
}

async function race(){//Retorna el primero
    const promises=[a(),b(),c()]
    const [out1]=await Promise.race(promises);
    return `parallel is done: ${out1}`
}

async function serie(){
    const out1=await a();
    const out2=await b();
    const out3=await c();
    return `serie is done: ${out1} - ${out2} - ${out3}`
}
//Rapidez de ejecucicon
//race>parallel>serie

