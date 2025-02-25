//CURRYING -------------------------------------------------------------------------
/* currying: A functional programming technique in which you transform the function with multiple arguments into a sequence of nesting functions and 
each taking a single argument at a time.

In other words, instead of a function taking all arguments at one time, it takes the first one and returns a new function, which takes the 
second one and returns a new function, which takes the third one, and so on, until all arguments have been fulfilled.

*/

function first(a) {
    return function second(b) {
        return function third(c) {
            return a + b + c;
        }
    }
}

let sum = first(10)(20)(30);       //10 is for first; 20 is for second; 30 is for third
console.log(sum);   // 60

//Explanation of sum = first(10)(20)(30);
let sum1 = first(10);
console.log(sum1);    // Returns [Function: second]

let sum2 = sum1(20);
console.log(sum2);   // Returns [Function: third]

let sum3 = sum2(30);
console.log(sum3);   // Returns 60



//Currying using ES6 syntax in JavaScript using arrow function: -
let add = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(add(5)(10)(15));  // Returns 30




/// Example 2:------------------------------------------------
function outerFunction(){
    let count = 0
    function innerFunction(){
        count++   // 0 + 1 = 1
        console.log(count+1);   // 2 // 3 // 4
    }
    return innerFunction
}

let counter = outerFunction();
counter();  //2   
counter();  //3
counter();  //4
    