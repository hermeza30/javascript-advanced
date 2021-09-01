//HOF
const hof=()=>()=>5;
hof()();

const hof2=(fn)=>fn(5);
hof2(function asd(num){
    return num;
});

//CLOUSURE

const clousuref= function (){
    let count=0;
    return function increment(){
        count++;
    }
}
const peperoni = clousuref();
console.log(peperoni())