function memorization(){

    let cache={};
    return function verificando(n){
        if(n in cache){
            return cache[n];
        }else{
            cache[n]=n+80;
            return cache[n];
        }
    }

}
const m=memorization();
console.log('1',m(5))
console.log('2',m(5))
