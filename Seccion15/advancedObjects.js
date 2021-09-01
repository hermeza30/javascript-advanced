//Refernece type
var obj1={value:10};
var obj2=obj1;//Apuntan al mismo lugar en memoria
var obj3={value:10}//
console.log(obj1===obj2) //true
console.log(obj1===obj3)//Mismos valores pero son objetos distintos apuntando a distintos lugares en memoria
obj1.value=15
console.log(ob2)//Obj2 cambiara su valor.
//Context vs Scope
function a(){
    console.log(this)//this del windows obj
}
const foo={
    a:function(){
        console.log(this)//Contexto de la function
    }
}
//Instantiation

class Player{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    introduce(){
        console.log("INTRODUCEE")
    }
}
class Wizard extends Player{
    constructor(name,type){
        //Error console.log() before the super
        super(name,type)
    }
    play(){
        console.log("PLAYYY")
    }
}
const w1=new Wizard('t','f');
const w2=new Wizard('t2','f2');
