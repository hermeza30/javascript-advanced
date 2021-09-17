//Function constructor
const four= new Function ('return 4');
four();

const four= new Function ('num','return 4');
//Las function son objetos especiales
/**Cada function tiene lo siguiente
 * code() cuando invoco la funcion corre una pieza de codigo
 * name-  tienen un nombre especial
 * properties- call-bind-apply
 */
/**Functions are first class citizens in JS
 * 1- las function pueden ser asignadas a variables
 *     var a= function (){}
 * 2-podemos pasar functiones como argumentos en otras
 *    a( function () {})
 * 3-podemos retornar otra funcion dentro de una function
 * function b(){
 *  return c(){
 *          console.log("LALALLAA")
 *          }
 * }
 */