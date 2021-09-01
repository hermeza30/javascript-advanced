function addTo90(n){
    return n+80;
}

let cache={};
function memorize(n){
    if (n in cache){
        return cache[n];
    }else{
        cache[n]=5+80;
        return cache[n];
    }
}//Forma de memorizar y usar el cache para guardar valores.