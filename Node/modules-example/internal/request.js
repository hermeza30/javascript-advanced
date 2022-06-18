function encript(data) {
  return "encrypted "+data;
}
function send(url, data) {
  const encriptData = encript(data);
  console.log(`${url} ${encriptData}`);
}
module.exports = {
  send,
};
