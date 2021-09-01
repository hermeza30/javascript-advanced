//En vez de  usar clases podemos usar composicion de la siguiente manera

function getAttack(character){
return Object.assign({},character,{attackFn:()=>{}})
}
function Elf(name,weapon,type){
    let elf={
        name,
        weapon,
        type
    }
    return getAttack(elf);
}