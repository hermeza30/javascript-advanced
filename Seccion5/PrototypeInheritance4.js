const obj={name:'sally'};
obj.hasOwnProperty('name');
function a(){};
a.hasOwnProperty('call')//false
a.hasOwnProperty('bind')//false
a.hasOwnProperty('apply')//false
a.hasOwnProperty('name')//True, las funciones tienen name. Las funciones son un tipo especial de objeto, tiene Code() Name(optional) Properties
/**Una funcion creada de la FUnction base */
function multiplo5(){
    return 5*5;
}
multiplo5.__proto__//Hace referencia/apunta a las propiedades de la Function ---> bind, call, apply
multiplo5.__proto__===Function.prototype// __proto__ referencia al upchain del Objeto prototype

/**Un array creado del Array base */
const array=[];
array.__proto__===Array.prototype//array.__proto__----> Array.prototype