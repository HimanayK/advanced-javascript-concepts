let newPromise = new Promise((resolve, reject) => {
  let isRight = true;
  if (isRight == true) {
    resolve("Yes, she is right");
  } else {
    reject("No, she is wrong");
  }
});

newPromise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Code is executed");
  });

  /* OUTPUT
  Yes, she is right
  Code is executed
*/

/*
Promises handle asynchronous operations and represent values that may be available now, later, or never.
 Key Points:
States: Pending, Fulfilled, Rejected.
.then() for success, .catch() for errors, and .finally() for code after settling.
*/


///  Returns two promises result in one go  using Promise.all or IIFE using async/await
const helloPromise = new Promise((resolve, reject) => {
  resolve('Hello');
});
const worldPromise = new Promise((resolve, reject) => {
  resolve('World');
});

(async () => console.log(await helloPromise + ' ' + await worldPromise))();

      //OR//

      Promise.all([
        helloPromise,
        worldPromise
    ]).then(result => {
        console.log(result[0] + ' ' + result[1]);
    });

    //Promise.all returns an array of promises