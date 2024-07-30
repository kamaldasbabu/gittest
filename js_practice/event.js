const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const promise = new Promise((resolve) => {
    setTimeout(resolve, 1000, 'ruidas');
})

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  const result = promise.then((val) => {
    console.log("val", val);
  });
  console.log("resultresult", result);
});
myEmitter.emit('event');