const str="Lo nuevo es lo nuevo";
str.replaceAll('nuevo','viejo');
const compose=(f)=>(g)=>data=>g(f(data));