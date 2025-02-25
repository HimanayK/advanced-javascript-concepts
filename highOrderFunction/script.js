//map() creates a new array by calling a function on each elemtn of an array without modifying the original array.

const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr);   // [1, 2, 3, 4, 5]
console.log(output);   // [11, 12, 13, 14, 15]



const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

const result = users.map((user) => `${user.firstName} ${user.lastName}`)
console.log(result); // ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', 'Joe Doe']




//---------------------------------------------------------------------------------------------------------------------------------------------

//filter() creates a new array with elements of the existing array that meet the specified condition and it doesn't mutate the original array.
const arr1 = [1, 2, 3, 4, 5];
const output1 = arr.filter((num) => num % 2) // filter out odd numbers
console.log(arr1); // [1, 2, 3, 4, 5]
console.log(output1); // [1, 3, 5]


const users1 = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

// Find the users with age greater than 30
const output2 = users1.filter(({age}) => age > 30)
console.log(output2); 
/*[
{firstName: 'Jack', lastName: 'Doe', age: 35}, 
{firstName: 'Jill', lastName: 'Doe', age: 40},
 {firstName: 'Joe', lastName: 'Doe', age: 45}
]
 Note: - The function takes a single argument, an object destructured to a single property age. 

 */


//---------------------------------------------------------------------------------------------------------------------------------------------
 //reduce() function executes reducer function on each element of an array and returns a single output value.
 const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)
console.log(sum); // 15


//Example 2: Using reduce() to find the maximum value in an array:

let numbers1 = [5, 20, 100, 60, 1];
const maxValue = numbers1.reduce((max, curr) => {
    if(curr > max) max = curr;
    return max;
});
console.log(maxValue); // 100

//Example 3: Using reduce() to merge different objects in a single object:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }


