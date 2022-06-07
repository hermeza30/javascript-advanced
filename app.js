const multiplyBy3AndAabsolute=compose(mult3, abs)

const abs=(data)=>Math.abs(data);
const mul3=(data)=>data*3
const compoes=(f,g)=>(data)=>f(g(data))