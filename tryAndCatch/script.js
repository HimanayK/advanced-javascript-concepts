try {
  let a = qrbcde;
  console.log(a);
} catch (error) {
  console.log("a will show error");
} finally {
  console.log("code is executed");
}
/* OUTPUT
a will show error    
*/

/*
try...catch is used to handle errors during runtime.
 Key Points:
try block contains code that may throw an error.
catch block handles the error.
finally block executes regardless of the outcome.
*/
