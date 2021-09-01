movePlayer(100,left)
    .then(()=>movePlayer(400,left))
    .then(()=>movePlayer(400,left))
    .then(()=>movePlayer(400,left))

async function playerStart(){
    await movePlayer(400,left)
    await movePlayer(400,left)
    await movePlayer(400,left)
}
//Los ASYNC AWAIT son promesas. Es decir son mas Sugar sintaxis de las promesas.
