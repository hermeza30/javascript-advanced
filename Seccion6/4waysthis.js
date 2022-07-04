//new binding this

function Person(name,age){
    this.name=name;
    this.age=age;
}
const person1=new Person("pepe",55)

//Implicit binding

const person2={
    name:'Karen',
    age:40,
    hi(){
        console.log('hi'+this.name)
    }
}

//Explicit binding
const person3={
    name:'Karen',
    age:40,
    hi:function(){
        console.log('hi'+this.setTimeout)//Se usa call bind apply
    }.bind(window)
}

//Arrow function
const person4={
    name:'Karen',
    age:40,
    hi:function(){
        var inner=()=>{
            console.log("hi",this.name)//Con lexical scope retorna object
        }
        return inner();
    }
}

const person5={
    name:'Karen',
    age:40,
    hi:function(){
        var inner=function(){
            console.log("hi",this.name)//Con dynamic scope retorna window
        }
        return inner();
    }
}