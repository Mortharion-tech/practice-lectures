//  4 + 5 * 2
//  Using callback function

const multiply = (a, b) => a * b;
const sum = (a, b) => a + b;

//  passing the callback as a parameter
function calculate(a, b, c, callback) {
    const multiplyResult = multiply(a, b);
    //  calling the callback inside the function
    console.log(callback(multiplyResult, c));
}

calculate(5, 2, 4, sum);


//  Promises

//  creating new Promise with constructor
//  passing two parameters resolve and reject to the function
const washDishesPromise = new Promise(function(resolve, reject) {
    const isGoodChild = false;

    if (isGoodChild) {
        //  resolve message
        resolve('I washed the dishes');
    } else {
        //  reject message
        reject('I will keep dishes dirty!');
    }
})

//  'then' after promise is resolved or rejected
washDishesPromise.then((value) => {
    //  resolve message can just be displayed
    console.log(value);
}, 
// but reject error has to be handled seperately
//  1. way: pass error handler as 2. argument
(error) => {
    console.log(error);
})

//  2. way: use catch for the error
washDishesPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})


//  Timeouts

console.log(1);

//  second argument is delay in ms
//  ! Asynchronous function !
//  running in background
setTimeout(() => {
    console.log(2);
}, 3000);

//  so this will be executed before 2
console.log(3);


//  Promises
//  Keeping the order of 1 - 2 - 3 with a Promise

console.log(1);

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 3000);
})

//  only executed AFTER the promise is resolved
promise.then((value) => {
    console.log(value);
    console.log(3);
})


//  Timeouts
console.log('10');

const timeout = setTimeout(() => {
    console.log('20');
}, 3000);

//  returning timeout ID
console.log(timeout);

//  clearing the timeout, so cancel it's execution
//  using the ID of the timeout
clearTimeout(timeout);


// Intervals
console.log('10');

//  executing in the Interval (every 1s)
//  running for infinite time / until page is closed
const interval = setInterval(() => {
    console.log('20');
}, 1000);

//  can also clear Interval with ID
clearInterval(interval);