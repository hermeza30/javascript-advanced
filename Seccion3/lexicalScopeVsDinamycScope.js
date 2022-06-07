//Windows obje
const obj1={
    name:'billy',
    sing(){
        console.log("a",this);//Objeto
        var anotherFunction=function(){
            console.log("b",this);//windows obj
        }
        anotherFunction();
    }
}
obj1.sing();
//Obj Arrow Function
const obj2={
    name:'billy',
    sing(){
        console.log("a",this);//Objeto
        var anotherFunction=()=>{
            console.log("b",this);//Obj  con la function arrow 
        }
        anotherFunction();
    }
}
obj2.sing();
//Bind Function
const obj3={
    name:'billy',
    sing(){
        console.log("a",this);//Objeto
        var anotherFunction=function(){
            console.log("b",this);//Se bindea el objeto para obtener el this 
        }
        return anotherFunction.bind(this);//Usando bind
    }
}
obj3.sing()();