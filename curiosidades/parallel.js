function parallel(funcs, callback) {
  let results = [];
  let callststack = 0;
  funcs.forEach((fn) => {
    fn(done);
  });
  function done(data) {
    results.push(data);
    callststack += 1;
    if (callststack === funcs.length) {
      callback(results);
    }
  }
}

function dos(done) {
  const result = 2 * 3;
  done(result);
}
function uno(done) {
  const result = 2 * 2;
  done(result);
}

parallel([uno, dos], (resultado) => {
  console.log('Resultado', resultado);
});
