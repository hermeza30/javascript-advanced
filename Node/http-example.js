//vid 38
const http=require('http');
const https=require('https');
const {get}=require('https');
// const req=https.request('https://www.google.com',(res)=>{
//     res.on('data',(chunk)=> {
//         console.log(`Data from ${chunk}`)
//     })
//     res.on('end',()=>{
//         console.log("No more data")
//     })
// })
// req.end();//triggereamos la request

//secure

get('https://jsonplaceholder.typicode.com/todos/1',(res)=>{
    res.on('data',(chunk)=> {
        console.log(`Data from ${chunk}`)
    })
    res.on('end',()=>{
        console.log("No more data")
    })
})