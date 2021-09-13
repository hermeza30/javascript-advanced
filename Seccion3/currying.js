const mul=(a,b)=>{
    return a*b;
}

const store=mul.bind(this,2);
store(4);
store(5);
store(6);
store(7);