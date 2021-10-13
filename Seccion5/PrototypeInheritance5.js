let human={
    mortal:true
}
let socrates=Object.create(human);//Forma de herdad propiedades de humano
console.log(socrates)

socrates.age=42;
console.log(socrates.mortal)
console.log(human.isPrototypeOf(socrates))//True--es humano un prototipo de socrates
