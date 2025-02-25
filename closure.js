/*closure: - A function that has access to variables in its parent scope, even after the parent function has returned. 
Closures are created when a function is defined inside another function, and the inner function retains access to the 
variables in the outer function's scope.
In simple words, A closure is a function that has access to the parent scope, after the parent function has closed.

*/

function outerFunction(a) {
    var innerLet = 4;

 function innerFunction() {
    let result = a + innerLet;
    console.log(result);
 }
 return innerFunction;
}

 let closure = outerFunction(10);    // note: store the outer function in a variable then call the variable with () such as closure()
 closure();            // Returns 14            // it is currying

 // OR just write the above 2 statements as in one line
 outerFunction(10)();      // Returns 14     // it is currying

