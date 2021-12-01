class Elf extends Character{
    constructor(name, weapon,type){
        super(name,weapon);
        this.type=type;
    }
}
class Ogro extends Character{
    constructor(name, weapon,color){
        super(name,weapon);
        this.color=color;
    }
    makeFort(){
        console.log("el ogro mas fuerte"+this.color)
    }
}
class Character {
    constructor(name,weapon){
        this.name=name;
        this.weapon=weapon;
    }
    attack(){
        return 'attack with'+this.weapon;
    }
}
const peter=new Elf('pepe','acha');
const sam=new Elf('wanchupe','checho');
peter.attack();
console.log(peter instanceof Elf);//Creamos una instancia de la clase Elf