//Partial application

//A diferencia de currying en la segunda llamda espera todos los argumentos
const multiply=(a,b,c)=>a*b*c;
const mlb5=multiply.bind(null,5);
console.log(mlb5(6,7))