const urls=[
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos'
];


async function fetchurls(){


const [coments,photos,todos]= await  Promise.all(
                                        urls.map(u=> fetch(u).then(res=>res.json()) ));
 console.log('Coments',coments)
 console.log('Photos',photos)                                       
 console.log('TOdoso',todos)                                       

}