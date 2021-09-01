//Object spread operator

const animal={
    tigger:23,
    lion:5,
    monkey:2
}

const {tigger,...rest}=animal;

//array
const ar=[1,2,3,4,5];
function sum(a,b,c,d,e){
    return a+b+c+d+e;
}
sum(...ar)