
"use-strict"
// var promise1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, "one");
//   });
//   var promise2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, "two");
//   });
  
//   Promise.race([promise1, promise2]).then(function (value) {
//     console.log(value); // "two" // Both promises will resolve, but promise2 is faster
//   });

//   Promise.all([promise1, promise2]).then(function (value) {
//     console.log(value); // "two" // Both promises will resolve, but promise2 is faster
//   });
//   Promise.allSettled([promise1, promise2]).then(function (value) {
//     console.log(value); // "two" // Both promises will resolve, but promise2 is faster
//   });


const promise10 = Promise.resolve(42);
const promise20 = Promise.reject("Error occurred");
const promise30 = new Promise((resolve) => setTimeout(resolve, 1000, "Hello"));
const promise40 = Promise.resolve("Success");

// Promise.allSettled([promise10, promise20, promise30, promise40])
//   .then((results) => {
//     results.forEach((result, index) => {
//       if (result.status === "fulfilled") {
//         console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
//       } else {
//         console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
//       }
//     });
//   });


const rs = await Promise.allSettled([promise10, promise20, promise30, promise40]);