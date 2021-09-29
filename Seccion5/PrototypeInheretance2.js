let dragon={
    name:'Tanya',
    fire:true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
            return ` I am ${this.name} the breather of fire `
        }
    }
    
}
let lizar={
    name:'kiki',
    fight(){
        return 1;
    }
}

const singLizar=dragon.sing.bind(lizar);
console.log(singLizar())
//Puedo hacer lo mismo de la siguiente manera

lizar.__proto__=dragon;//Con esto decimos que lizar va a heredar en su proto chain. los metodos y propiedades de dragon.
lizar.isPrototypeOf(dragon);//Pregunto si lizar es un prototipo de dragon, es como decir si dragon hereda de lizar. False
dragon.isPrototypeOf(lizar);//Dragon es un prototipo de lizzard si, ya que lizar hereda de dragon sus propiedades.
