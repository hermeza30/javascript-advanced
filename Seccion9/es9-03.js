//for await of
const urls=[
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos'
];

Promise.all(urls.map(url=>fetch(url).then(resp=>resp.json())))
.then(console.log)
.catch(console.log)
.finally(()=>{
    //Siempre se ejecuta, despues de pasar por el then o catch y no recibe datos
})


const loopThroughtUrls=urls=>{
    for (url of urls){
        console.log(url)
    }
}

const getData=async function (){
    const arrayPromise=urls.map(u=>fetch(u));
    for await(let ar of arrayPromise){
            const d= await ar.json();
            console.log('res',d)
    }
}