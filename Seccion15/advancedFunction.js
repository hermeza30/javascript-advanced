//Clousure
const first=()=>{
    const gree='hi',
    const second=()=>{
        alert(gree);
    }
    return second;
}
const newF=first();
newF();

//Currying

const multipliBy5=(a,b)=>a*b;
const multipliCurrying=(a)=>(b)=>a*b;
const m=multipliCurrying(5);
m(4);
m(3);
m(2);
m(1);
//Compose

const compose=(f,g)=>(data)=>f(g(data));

const multby3=(a)=>a*3;
const sum=(b)=>b+5;

const c=compose(sum,multby3);
console.log(c(3));

//No side effect and Function purity

