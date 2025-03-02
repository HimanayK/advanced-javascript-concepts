// Promise.all accepts an array of promises
// Remember that response.json() returns a Promise.
Promise.all([
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) =>response.json()),

  fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((response) => response.json()),

  new Promise((resolve, reject) => {
    document.getElementById("btn").addEventListener("click", () => { resolve("CLICKED!") });
  })

])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });



  // Example 2: 
  const helloPromise = new Promise((resolve, reject) => {
    resolve('Hello');
  });
  const worldPromise = new Promise((resolve, reject) => {
    resolve('World');
  });
   Promise.all([
     helloPromise,
     worldPromise
    ]).then(result => {
      console.log(result[0] + ' ' + result[1]);
    });