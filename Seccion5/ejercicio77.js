function initilize(){
    let called=0;
    return function(){
        if(called>0){
            return;
        }else{
            let view='view';
            called++;
            console.log("Entrando a la vista");
        }
    }
}
const i=initilize();
i();