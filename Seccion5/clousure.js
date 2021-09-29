function a(){
    let grandpa='grandpa';
    return function b(){
        let father='father';
        return function c(){
            let son='son';
            return `${grandpa},${father},${son}`//Clousure el lexical-scope 
        }
    }
}
a()()()

const boo=(string)=>(name)=>(name2)=>console.log(` ${string}, ${name} , ${name2} `);
const boostring=booo('hi');//Storea en memoria para ser usado posteriormente.

const boostringname=boostring();