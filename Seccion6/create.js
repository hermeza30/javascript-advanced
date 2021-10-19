//Factory Functions
const elffunction = {
  attack() {
    return "attack with" + this.weapon;
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elffunction); //Crea un link hacia la posicion de memoria donde esta definida la funcion attack. es decir no crea una nueva function
  console.log(newElf.__proto__)//Hace referencia al prototype de elfFunction
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}
const peter = createElf("peter", "voleadora");
peter.attack = elfunction.attack;
peter.attack();
const san = createElf("san", "voleadora");
san.attack();