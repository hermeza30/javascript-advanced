//indexof-->Encuentra el id de un elemento dado
const prueba = 'aabaa';
const arrayprueba = Array.fromn(prueba);
arrayprueba.indexOf('a');

//splice-->elimina un elemento, comienza por start, cantidad a eliminar, insertar

const arraySplice = Array.from([1, 2, 3, 4]);
const eliminados = arraySplice.splice(1, 2); //[2,3]

//find--->Encuentra un elemento del array
const arrayFind = Array.from([1, 2, 3, 4]);
const element = arrayFind.find((v) => v === 4); // 4

//slice--> devuelve una copia de elementos indicados del array-Ultimo elemento no se incluye
const arraySlice = Array.from(['a', 'b', 'c', 'd', 'e', 'f']);
const elemento = arraySlice.slice(1, 3); //[b,c]  elemento no se incluye

//At--->
const arrayAt = Array.from(['a', 'b', 'c', 'd', 'e', 'f']);
const atElement = arrayAt.at(2); //c
//Reverse-->
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
