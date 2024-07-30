const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

if (isMainThread) {
    // eslint-disable-next-line no-undef
    const worker1 = new Worker(__filename);
    // eslint-disable-next-line no-undef
    const worker2 = new Worker(__filename);

    worker1.on('message', (message) => {
        console.log('Worker sent:', message);
        const numCores = os.cpus().length;
        console.log("numCores", numCores);
    });


    // worker2.on('work1', (message) => {
    //     console.log('Worker sent message :', message);

    // })

} else {
    //   console.log(`Worker thread ID: ${workerData.id}`);
    parentPort.postMessage('Hello from worker!', workerData);
}
