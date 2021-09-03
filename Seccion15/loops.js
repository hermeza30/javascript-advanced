const basket=['apples','oranges','grapes'];
//Formas comunes de recorrer el array
for (let index = 0; index < basket.length; index++) {
    console.log(basket[index]);
}
basket.forEach(item=>{
    console.log(item)
})
//

//for of
//Iterating--tanto los arrays como el string pueden iterarse.
//No puedo iterar enumerating
for(item of basket){
    console.log(item)
}

//for in trabaja con objetos
//Estos se denominan enumerating- solo las keys del objeto pueden iterarse
//No se puede trabajr con arrays y string-
const detailbasket={
    apples:5,
    oranges:10,
    grapes:1000
}

for(let d in detailbasket){
    console.log(d)
}

