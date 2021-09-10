function a(){
    console.log(this)//Hace referencia al objeto windows
}
a()

function b(){
    'use strict'
    console.log(this)//referencia al objet
}
b()
//1:Gives method access to their object
const obj={
    name:'billy',
    sing:function(){
        return 'lalalla veronica'+this.name;
    },
    singAgain(){
        return this.sing()+'!';

    }
}
obj.sing();//Hace referencia al objeto

//2:Execute the same code for multiple object

function importPerson(){
    console.log(this.name)//llama al windows object
}
var name="Sunny";
const obj1={
    name:"cas",
    importPerson
}
const obj2={
    name:"blas",
    importPerson
}
importPerson();//Windows obj
obj1.importPerson();//Obj1
obj2.importPerson();//Obj2

