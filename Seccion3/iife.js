function z(){
    return 5;
}
function z(){
    return "aaaa";
}
// console.log(z());//Se pisan function declaration

var script1=(function(){//Scopea esto una vez de manera global y las variables internas como z quedan adrentro de ese scope y no pisa z
    function z(){
        return 5
    }
    return {
        z
    }
});//function expresion
var script2=(function(valor){//Scopea esto una vez de manera global y las variables internas como z quedan adrentro de ese scope y no pisa z
   console.log("entrando")
    function z(){
        return valor
    }
  return {
      z
  }
})(2);//function expresion
console.log(z());
console.log(script1().z());
console.log(script2.z());
