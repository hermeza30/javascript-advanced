function memorization(){

    let cache={};
    return function verificando(n){//Clousure
        if(n in cache){
            return cache[n];
        }else{
            console.log("Pasando la primera vez")
            cache[n]=n+80;
            return cache[n];
        }
    }

}
const m=memorization();
console.log('1',m(5))
console.log('2',m(5))
