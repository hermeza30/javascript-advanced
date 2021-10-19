//Factory Functions

function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "attack with" + weapon;
    },
  };
}
const peter=createElf('peter','voleadora');
const san=createElf('san','voleadora');
san.attack();
peter.attack();