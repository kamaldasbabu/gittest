// main.js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // This is the main thread, where we can create workers
  console.log('Main thread: creating workers');

  // Create a worker and pass data to it
  // eslint-disable-next-line no-undef
  const worker1 = new Worker(__filename, { workerData: { task: 'Task 1', number: 10 } });
  // eslint-disable-next-line no-undef
  const worker2 = new Worker(__filename, { workerData: { task: 'Task 2', number: 20 } });

  // Listen for messages from the workers
  worker1.on('message', (result) => {
    console.log(`Worker 1 result: ${result}`);
  });

  worker2.on('message', (result) => {
    console.log(`Worker 2 result: ${result}`);
  });

  // Handle worker errors
  worker1.on('error', (error) => {
    console.error(`Worker 1 error: ${error}`);
  });

  worker2.on('error', (error) => {
    console.error(`Worker 2 error: ${error}`);
  });
  

  // Detect when workers exit
  worker1.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Worker 1 stopped with exit code ${code}`);
    }
  });

  worker2.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Worker 2 stopped with exit code ${code}`);
    }
  });
} else {
  // This is a worker thread
  console.log(`Worker ${workerData.task}: processing data`);

  // Perform some CPU-intensive task
  const computeFactorial = (number) => {
    if (number === 0) return 1;
    return number * computeFactorial(number - 1);
  };

  const result = computeFactorial(workerData.number);

  // Send the result back to the main thread
  parentPort.postMessage(`Factorial of ${workerData.number} is ${result}`);
}
