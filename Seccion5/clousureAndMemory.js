/**Clouser tiene 2 beneficios
 * 1-Memory efficient
 * 2-Encaptulation
 */

//1
function heavyDuty(index){
    const bigArray=new Array(70000).fill(':·)');
    return bigArray[index];
}
function heavyDuty2(){
    const bigArray=new Array(70000).fill(':·)');
    return function(index){
        bigArray[index];
    }
}
const hd=heavyDuty2();//Usando clousures para guarda la informacion del bigarray y su creacion
console.log(hd(555));
//2
const makeNuclearBUtton=()=>{
    let timeWithoutDestruction=0;
    const passTime=()=>timeWithoutDestruction++;
    const totalPeaceTime=()=>timeWithoutDestruction;
    const launch=()=>{timeWithoutDestruction = -1
    return 'booom'};
    setInterval(passTime,1000);
    return {//Permite proteger los atributos internos, solamente retornando functions.
        launch,
        totalPeaceTime
    }
}
const ohno=makeNuclearBUtton();

