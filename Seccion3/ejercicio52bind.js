const character = {
    name: 'Simon',
    getCharacter() {
        function retornarNombre(){
            return this.name;
        }   
      return retornarNombre.bind(this);
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter;

console.log(character.getCharacter()())//Permite hacer que el objeto llame tome su this. Lexical scope
console.log(giveMeTheCharacterNOW()())//Dinamic scope el global ejecuta y toma su this.

//Otro tipo de solucion

const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);