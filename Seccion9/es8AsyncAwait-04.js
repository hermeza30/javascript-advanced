const urls=[
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos'
];


async function fetchurls(){

try{
        const [coments,photos,todos]= await  Promise.all(
            urls.map(u=> fetch(u).then(res=>res.json()) ));
        
        console.log('Coments',coments)
        console.log232('Photos',photos)                                       
        console.log('TOdoso',todos)     

    }catch(err){
        console.log("Error",err)
}
                                  

}