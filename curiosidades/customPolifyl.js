Array.prototype.map2 = function (callback) {
  const resultado = this;
  let afterResultado = [];
  for (let i = 0; i < resultado.length; i++) {
    afterResultado.push(callback(resultado[i]));
  }
  return afterResultado;
};
[1, 2, 3].map2((n) => {
  return n * 2;
});
