//Windows obje
const obj={
    name:'billy',
    sing(){
        console.log("a",this);//Objeto
        var anotherFunction=function(){
            console.log("b",this);//windows obj
        }
        anotherFunction();
    }
}
obj.sing();
//Obj Arrow Function
const obj={
    name:'billy',
    sing(){
        console.log("a",this);//Objeto
        var anotherFunction=()=>{
            console.log("b",this);//Obj  con la function arrow 
        }
        anotherFunction();
    }
}
obj.sing();
//Bind Function
const obj={
    name:'billy',
    sing(){
        console.log("a",this);//Objeto
        var anotherFunction=function(){
            console.log("b",this);//Se bindea el objeto para obtener el this 
        }
        return anotherFunction.bind(this);//Usando bind
    }
}
obj.sing()();