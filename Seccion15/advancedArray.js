//Map
const array=[1,2,3,4,5];
const newArray=array.map(r=>r+1).filter(x=>x!=2)//Map retorna un array nuevo modificando los elementos internos
//Crea un nuevo array transformandolo//Pero no mutamos la data

//Filter
const filterArrau=array.filter(num=>{
    return num*5;
})//Al no modificar el Source Array hace que sea Sin SIDE EFFECT Y SEA PURITY

//Reduce

const redArray=array.reduce((accu,num)=>accu+num);
console.log('Reduce',redArray);

//Recorrer objeto

let obj={
    username0:'santa',
    username1:'santa1',
    username2:'santa2',
  }
  for(const [key,value] of Object.entries(obj)){
    console.log("key",key,value)
  }
  