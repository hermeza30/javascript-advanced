//Pure function
/** 
 * Una funcion pura siempre tiene el mismo retorno con la misma entrada.
 * No puede modificar nada que este fuera de la funcion misma. No provoca side effect.
 * 
 * 
 * 
 */
const array=[1,2,3];
function a(){
    array.pop();
}
console.log(array);//Produce sideeffect.

const array2=[1,2,3];
function removelastitem(arr){
    const newArray=[].concat(arr);
    newArray.pop();
    return newArray;
}
function multiplyby2(arr){
    return arr.map(item=>item*2);
}
console.log("array original",array2)
console.log("removearray",removelastitem(array2))
console.log("multiplx2",multiplyby2(array2))
/**
 * input--->output
 */
function a(num1,num2){//No hay side effect porque los parametros son locales.
    return num1+num2;
}
function b(num){
    return num*2;
    }
    b(a(3,4))