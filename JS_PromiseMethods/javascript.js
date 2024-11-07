fetch(`https://jsonplaceholder.typicode.com/posts/1`)
fetch(`https://jsonplaceholder.typicode.com/posts/2`)
fetch(`https://jsonplaceholder.typicode.com/posts/3`)

//  Resolving multiple requests in parallel (all requests running at the same time)
//  accepts array of Promises

Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/1`),
    fetch(`https://jsonplaceholder.typicode.com/posts/2`),
    fetch(`https://jsonplaceholder.typicode.com/posts/3`)
]).then(responses => {
    console.log(responses);         //  returns array of results
})

//  loading any post that will finish loading first
//  ! can have different result depending on loading time !
Promise.any([
    fetch(`https://jsonplaceholder.typicode.com/posts/1`),
    fetch(`https://jsonplaceholder.typicode.com/posts/2`),
    fetch(`https://jsonplaceholder.typicode.com/posts/3`)
]).then(response => {
    console.log(response);         //  returns single result
})

//  any waiting for the first resolved Promise OR until all Promises are rejected
Promise.any([
    new Promise((resolve, reject) => reject(1)),
    new Promise((resolve, reject) => reject(2)),
    new Promise((resolve, reject) => reject(3))
]).then(response => {
    console.log(response);
//  catching error if all promises get rejected
}).catch((error) => {
    console.log(error)
})

//  race waiting for the first settled promise (either reject OR resolve)
Promise.race([
    new Promise((resolve, reject) => reject(1)),
    new Promise((resolve, reject) => reject(2)),
    new Promise((resolve, reject) => reject(3))
]).then(response => {
    console.log(response);
}).catch((error) => {
    console.log(error)
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
    console.log('Error: ', error)
})

//  In practice we still want to load all other posts even when one post fails to load
//  allSettled loading every resolved Promise
//  waits until all Promises are settled (resolved or rejected)

Promise.allSettled([
    new Promise((resolve, reject) => reject(1)),
    new Promise((resolve, reject) => reject(2)),
    new Promise((resolve, reject) => resolve(3))
]).then(response => {
    console.log(response);
}).catch((error) => {
    console.log('Error: ', error)
})