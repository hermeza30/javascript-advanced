var database=[{
    username:"Tony",
    password:"123"
},{
    username:"Sally",
    password:"1234"
},{
    username:"Pepe",
    password:"1235"
}];

var newsFeed=[{
    username:"Boby",
    timeline:"que cansado"
},{
    username:"Sally",
    timeline:"agaunte javascript"
}];


var usernamepromt=prompt("Cual es tu nombre");
var passwordpromt=prompt("Cual es tu password");
const  isUserValid=(user,pass)=>{
    for (let index = 0; index < database.length; index++) {
        if(database[i].username===user&&
            database[i].password===pass){
                return true
            }else{
                return false

            }
    }
}
function singIn(username, passowrd){
   isUserValid(username,passowrd)?console.log(newsFeed):alert("Sorry tu pass es incorrecto")
}
singIn(usernamepromt,passwordpromt);