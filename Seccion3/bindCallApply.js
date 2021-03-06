//Diference Apply vs Call
// The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is "A for array and C for comma."

// See MDN's documentation on apply and call.

// Pseudo syntax:

// theFunction.apply(valueForThis, arrayOfArgs)

// theFunction.call(valueForThis, arg1, arg2, ...)
function a(){
    console.log("hi");
}
a.call()//invoco la function

const wizard={
    name:'merlin',
    health:50,
    heal(){
        return this.health=100;
    },
    heal2(num1,num2){
        return this.health+=num1+num2;
    }
}
const archer={
    name:"archer",
    health:50,
};

//CALL-Como hago para que archer herede la function de wizard.
console.log(archer)
wizard.heal.call(archer)//Le añado a archer la function heal y la ejecuto. Hago que archer pueda ejecutar la funcion heredada de wizard.
console.log(archer)


//CALL-Con parametros
console.log(archer)
wizard.heal.call(archer,4,5)//Le añado a archer la function heal2 y la ejecuto.
console.log(archer)

//APPLY-Con parametros es lo mismo q call pero con array
console.log(archer)
wizard.heal.apply(archer,[4,5])//Le añado a archer la function heal2 y la ejecuto.
console.log(archer)

//BIND me retorna una function console.log(archer)
const r=wizard.heal2.bind(archer,[4,5])//Bind hace un store de la function y retorna la misma
console.log(r())