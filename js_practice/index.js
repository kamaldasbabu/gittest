


// // const arr = new Array()

// Array.prototype.customFunction  = function () {

// }


// Array.prototype.getLength = function() {
//     return this.length;
// };


// const arr = new Array();

// arr.push(1);



// const len = arr.getLength();
// console.log(len)


function fn1(p1) {
    return function fn2(p2) {
        return function fn3(p3) {

            return p1 + p2 + p3;
            
        }
    }
}

console.log("result",  fn1(1)(2)(3));


const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

console.log(curryUnaryFunction(1)(2)(3));





//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]




const add = (a, b) => a+b;
const randomNum = (a) => parseInt(Math.random() * 100 * a);

console.log(add(2, 4)); // pure funciton
console.log(add(2, 4)); // pure funciton
console.log(randomNum(2)); // impure function
console.log(randomNum(2)); // impure function
console.log(randomNum(2)); // impure function



// First-order function that accepts parameters
const firstOrderFunc = (name, greeting) => {
    console.log(`${greeting}, I am ${name}`);
}

// Higher-order function that takes a function as a parameter
// and additional arguments to pass to that function
const higherOrder = (func, ...args) => {
    func(...args); // Call the passed function with the provided arguments
}

// Call higherOrder with firstOrderFunc and arguments to pass
higherOrder(firstOrderFunc, "John", "Hello");
higherOrder(firstOrderFunc, "Alice", "Hi");





function firstOrderFn(name, surname, age) {
    console.log("first oride fuction ", name, surname, age)
}


function higherOrderFn(func, ...args) {
    func(...args);
}


higherOrderFn(firstOrderFn, 'rui', 'das', 12);


let data;

// const name = data.name;

console.log("name", data)