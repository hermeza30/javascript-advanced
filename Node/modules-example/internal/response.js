function decrypt(data) {
  return "decripted " + data;
}
function read() {
  return decrypt("data");
}
const CONTADOR=500;
module.exports = {
  read,
  CONTADOR
};
console.log("En response file")