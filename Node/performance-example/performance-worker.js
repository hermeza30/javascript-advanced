const { isMainThread, workerData, Worker } = require('worker_threads');

if (isMainThread) {
  console.log(`Main Trhead! ProcessId:${process.pid}`);
  new Worker(__filename, {
    workerData: [9, 19, 32, 22],
  });
  new Worker(__filename, {
    workerData: [7, 6, 2, 3],
  });
} else {
  console.log(`worker! ProcessId:${process.pid}`); //Crea un solo proceso con un mainthread master y dos childs
  console.log(`worker data: ${workerData.sort()}`); //Todo esto se ejecuta en un solo proceso.
}
