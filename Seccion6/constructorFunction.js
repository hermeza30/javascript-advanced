function Elf(name,weapon){
    this.name=name;
    this.weapon=weapon;
}
const peter=new Elf('pepe','acha');
const sam=new Elf('wanchupe','checho');


Elf.prototype.attack=function(){
    console.log("Atacando",this.weapon)//accede al global

}
Elf.prototype.attack2=()=>{
    console.log("Atacando",this.weapon)//da undefined porque el lexical scope solo toma lo que esta definido en ese contexto.
}
Elf.prototype.build=function(){
    function rebuild(){
        return this.name+'buildeando';
    }
    return rebuild.bind(this)
}
peter.attack();
peter.attack2();
peter.build()();

// const Elf1=new Function('name','weapon',`
// this.name=name;
// this.weapon=weapon;`);
// const sarah=new Elf1('sara','tiragome');

