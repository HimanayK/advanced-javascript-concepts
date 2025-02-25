/*
 Pure Functions are functions that have no side effects and always produce the same output for the same input,
 without modifying any external state.
 */

 function sum(a,b) {
    return a + b;
 }

 console.log(sum(10,20));  // Returns 30
 console.log(sum(10,20));  // Returns 30
 console.log(sum(10,20));  // Returns 30