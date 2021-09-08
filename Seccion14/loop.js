var todos=[
    '1',
    '2',
    '3','4'
]
for (let index = 0; index < todos.length; index++) {//ForLoop
    const element = array[index];
    console.log("Element",element)
}
var counterOne=0
while(counterOne<10){
    console.log(counterOne);
    counterOne++;
}
var counterTwo=10;
do{
    counterTwo--;//Hacer esto primero y despues validar la condicion en el while
}while(counterTwo>0)

todos.forEach((todo,index)=>{//ForEach
    console.log(todo)
    console.log(index)

});
