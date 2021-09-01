//currying
const multiply=(a,b)=>a*b;

const curriedMultiply=(a)=>(b)=>a*b;

curriedMultiply(5)(9);

const cm=curriedMultiply(4);
cm(4);