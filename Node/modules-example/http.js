//vid 40
// const {send}=require('./internal/request');
// const {read}=require('./internal/response')
// const {CONTADOR}=require('./internal/response')
const { send, read, CONTADOR } = require("./internal");
function request(url, data) {
  send(url, data);
  return read();
}

console.log(request("https://google.com", "holaa"));
//console.log("Require cache",require.cache)
