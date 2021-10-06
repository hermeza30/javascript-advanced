//Inheritance es la propiedad de un objeto acceder a las propiedades y metodos de otros objetos a traves del prototype chain.
//ejemplo Los Arrays y Functions son heradados de object
const array=[];
array.__proto__; //Obtenego los metodos del array
array.__proto__.__proto__;//Obtengo los metodos del objeto Base.
