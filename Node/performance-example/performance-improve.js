/* eslint-disable no-undef */
const express = require('express');
const cluster = require('cluster');
const os = require('os');
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

app.get('/', (req, res) => {
  res.status(200).json(`Process ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.status(200).json(`timer ${process.pid}`);
});

if (cluster.isMaster) {
  console.log('Master has been started');
  const numberofos = os.cpus().length;
  for (let i = 0; i < numberofos.length; i++) {
    console.log('forkeando');
    cluster.fork(); //Crea varios procesos  con varias instancias de node escuchando el mismo puerto.
  }
} else {
  console.log('el cluster esta iniciando');
  app.listen(3000, () => {
    console.log('Servidor corriendo');
  });
}
