/* Impure function: - 
An impure function is a function that has side effects or does not always return the same output when
given the same input.
Side effects can include modifying a global variable, changing the state of an object, or making a network request.
*/

let count = 0;

let change = (value) => {
    count += value;
    return count;
}

console.log(change(10));  // Returns 10
console.log(change(10));  // Returns 20
console.log(change(10));  // Returns 30
console.log(change(10));  // Returns 40