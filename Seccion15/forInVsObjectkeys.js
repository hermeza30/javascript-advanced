// Es en gran parte una preferencia o depende de si se trata o no de una base de código más imperativa o más funcional. Pero al menos debes ser consciente de las diferencias que van más allá del estilo. Específicamente, for..incapturará las claves heredadas mientras que se Object.keysadhiere solo a las propiedades propias. Por ejemplo:

var par = { prop1 : "some val" };
var obj = Object.create(par);
obj.prop2 = "some other val";

for(key in obj){
    console.log("Key: ", key)
    console.log("Value: ", obj[key])
}

// ^ prop1 and prop2

Object.keys(obj).forEach((key)=>{
    console.log("For Each Key: ", key)
    console.log("For Each Value: ", obj[key])
})

// ^ prop2 only