//Tenemos un nuevo tipo es el BigInt
//para obtener el tipo hago
typeof 1n
//El numero maximo que puede tener almacenado en memoria es
//The MAX_SAFE_INTEGER constant has a value of 253 - 1 (9007199254740991).

/**Big Int resuelve el problea de el numero maximo
 * Number.MAX_SAVE_INTEGER
 * no puedo hacer
 * 9007199254740991+10 no sumaria
 * para resolverlo tengo q hacer lo siguiente
 * 9007199254740991n+10n. aregando la n
 */
//////////////////////////////////////////

/**NULLISH */

let will_pokemon={
    picachu:{
        species:'mouse pokemon',
        height:0.6,
        weight:6
    }
}
let tony_pokemon={
    raichu:{
        species:'mouse pokemon',
        height:0.8,
        weight:30
    }
}
const weight=will_pokemon.picachu.weight;
console.log('weight',weight);
const weight2=tony_pokemon.picachu.weight;//Error porque no puede leer el valor undefined de picachu
//tony no tiene a picachu tiene raichu
//para solucionar esto se hace lo siguiente

let weight3=tony_pokemon?.picachu?.weight;
/**Double ?? vs || */
/**El primero chequea que no sea nulo ni undefined deja pasar '',false,0
 * 
 * El segundo chequea que tenga un valor distinto de 0, '', null,false, undefined
 */

 let tony_pokemon={
    raichu:{
        species:'mouse pokemon',
        height:0.8,
        weight:30,
        power:'',
        power2:0,
        power3:false
    }
}
const power=tony_pokemon?.raichu.power||'no power'
const powe2=tony_pokemon?.raichu.power2||'no power'
const powe3=tony_pokemon?.raichu.power3||'no power'
//con ??
const power4=tony_pokemon?.raichu.power??'no power'
const powe5=tony_pokemon?.raichu.power2??'no power'
const powe6=tony_pokemon?.raichu.power3??'no power'
