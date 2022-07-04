const express = require('express');
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    console.log(Date.now() - startTime);
  }
}

async function llamdaPromesa() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2 + 4);
    }, 9000);
  });
}

app.get('/', (req, res) => {
  res.status(200).json('Unblocked');
});

app.get('/timer', (req, res) => {
  delay(9000); //Esto bloquea el event loop
  res.status(200).json('Unblocked');
});

app.get('/settimeout', (req, res) => {
  res.status(200).json('setTimeout'); //no detiene el event loop
});

app.get('/llamdaPromesa', async (req, res) => {
  const result = await llamdaPromesa(); //Esto no bloquea el event loop solo que espera hasta qu este el resultado para devoler
  res.status(200).json(result); //no detiene el event loop
});

app.listen(3000, () => {
  console.log('Servidor corriendo');
});
