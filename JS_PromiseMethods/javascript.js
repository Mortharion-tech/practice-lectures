//  '.all' resolving multiple requests in parallel (all requests running at the same time)
//  accepts array of Promises

Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/1`),
    fetch(`https://jsonplaceholder.typicode.com/posts/2`),
    fetch(`https://jsonplaceholder.typicode.com/posts/3`)
]).then(responses => {
    console.log('All Posts: ', responses);         //  returns array of results
})

//  '.any' loading any post that will finish loading first
//  ! can have a different result depending on loading time !
Promise.any([
    fetch(`https://jsonplaceholder.typicode.com/posts/1`),
    fetch(`https://jsonplaceholder.typicode.com/posts/2`),
    fetch(`https://jsonplaceholder.typicode.com/posts/3`)
]).then(response => {
    console.log('First any post: ', response);         //  returns single result
})

//  '.any' waiting for the first resolved Promise OR until all Promises are rejected
Promise.any([
    new Promise((resolve, reject) => reject(1)),
    new Promise((resolve, reject) => reject(2)),
    new Promise((resolve, reject) => reject(3))
]).then(response => {
    console.log('Any promise: ', response);
//  catching error if all promises get rejected
}).catch((error) => {
    console.log('Not any promise: ', error);
})

//  race waiting for the first settled promise (either reject OR resolve)
Promise.race([
    new Promise((resolve, reject) => reject(1)),
    new Promise((resolve, reject) => reject(2)),
    new Promise((resolve, reject) => reject(3))
]).then(response => {
    console.log('Race winner: ', response);
}).catch((error) => {
    console.log('Race winner rejected: ', error);       // returns 1
})

//  ! all method throws error if ANY promise gets rejected !
//  first promise getting rejected and no other operations getting done
Promise.all([
    new Promise((resolve, reject) => reject(1)),
    new Promise((resolve, reject) => resolve(2)),
    new Promise((resolve, reject) => resolve(3))
]).then(response => {
    console.log(response);
}).catch((error) => {
    console.log('Error - not ALL resolved: ', error);       // returns 1 since this promise gets rejected
})

//  In practice we still want to load all other posts even when one post fails to load
//  allSettled loads every resolved Promise
//  waits until all Promises are settled (resolved or rejected)

Promise.allSettled([
    new Promise((resolve, reject) => reject(1)),
    new Promise((resolve, reject) => reject(2)),
    new Promise((resolve, reject) => resolve(3))
]).then(response => {
    console.log('All settled Promises: ', response);        // returns array of all settled promises
}).catch((error) => {
    console.log('Error: ', error);
})