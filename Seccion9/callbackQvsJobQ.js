//CallbackQ
setTimeout(()=>{
    console.log('tercero')
},0);
setTimeout(()=>{
    console.log('cuarto')
},10);
//Job Q
Promise.resolve('segundo').then((r)=>{
    console.log(r)
});
//callsatck
console.log('primero')