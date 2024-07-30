

const fs = require('fs');
const { nextTick } = require('process');

// function fn1() {
//     console.log("fn1");
// }

// function fn2() {
//     console.log("fn2");
// }

// function fn3(params) {
//     setTimeout(() => {
//         console.log("fn3 - " + params);
//     }, 1000)
// }
// function fn4(params) {
//     setImmediate(() => {
//         console.log("fn4 - " + params);
//     })
// }


// function fn5() {
//     nextTick(() => {
//         console.log("fb5")
//     })

// }

// fn3(3);
// fn4(4);
// fn1();
// fn2();
// fn5();



function fn() {
    console.log("fn");
    fs.readFile("./public/uploads/demo2.txt", (err, data) => {
        if (!err) {
            console.log("data", data);
        }
    });

}

console.log("Start");

nextTick(() => {
    console.log("Next tick callback");
});

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

setImmediate(() => {
    console.log("Immediate callback");
});


fn();

console.log("End");



