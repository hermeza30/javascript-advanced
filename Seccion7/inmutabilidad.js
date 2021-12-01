/** El estado de un objeto debe de ser inmutable
 * de lo posible siempre clonarlo.
 */
const obj = { name: "Tony" };
function clone(obj) {
  return { ...obj };
}
//obj.name="pepe" nunca hacer esto porque rompe con la inmutabilidad
//entonces hacer lo siguiente
function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "pepe";
  return obj2;
}
