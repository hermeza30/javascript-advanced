function loopVar(){
    for (var index = 0; index < 5; index++) {
        console.log(index);
    }
    console.log(index)//No error
}
function loop(){
    for (let index = 0; index < 5; index++) {
        console.log(index);
    }
    console.log(index)//error al tener la variable let
}