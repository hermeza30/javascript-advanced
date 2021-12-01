//Sintaxis sugar
/** Undereed de hood las clases trabajan con los prototype inheritance
 * con la sintaxis class hace que nuestro codigo sea mas legible para cualquiera,
 * si usaramos prototype inheritance seria mas dificil de leerlo
 */
class Elf{
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