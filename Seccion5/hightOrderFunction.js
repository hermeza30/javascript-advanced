function autenticate(verify){
    let array=[]; 
    for (let index = 0; index < verify; index++) {
        array.push(index);
    }
    return true;
}
function letPerson(person,fn){
    //le pasamos el dato y la function a ejecutar
    if(person.level==='admin'){
        fn(5000000)
    }else if(person.level==='user'){
        fn(500000)
    }
    return giveAccessTo(person.name)
}
const giveAccessTo=(nombre)=>{
    return 'acceso dado a '+nombre
}

letPerson({level:'admin',name:'pepito'},autenticate);
