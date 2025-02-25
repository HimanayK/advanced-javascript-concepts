# High Order Function

A higher order function is a function that takes one or more functions as arguments, or returns a function or value  as its result.

## Uses:  
1. <span style="color:blue; font-weight: bold">arrays</span>: **map(), reduce(), filter(), and sort()** functions to manipulate and transform data in an array.
1. <span style="color:blue; font-weight: bold">objects</span>: **Object.entries()** function to create a new array from an object.
1. <span style="color:blue; font-weight: bold">functions</span>: **compose()** function to create complex functions from simpler ones.

---
<span style="color:blue; font-weight: bold; font-size: 30px">map()</span>
The **map()** function creates a new array by calling a function on each elemtn of an array without modifying the original array.  
 It is often used to transform an array of data into a new array with a different structure.

<span style="color:blue; font-weight: bold; font-size: 30px">filter()</span>
 **filter()** function creates a new array with elements of the existing array that meet the specified condition and it doesn't  change the original array.  
  It is often used to select a subset of data from an array based on certain criteria.

  <span style="color:blue; font-weight: bold; font-size: 30px">reduce()</span>
 **reduce()** function executes reducer function on each element of an array and returns a single output value.

 ```
array.reduce(callBack(total, currentValue, currentIndex, arr), initialValue)

// total -> is the initialValue, if it is not provided, then it is the first element of an array
//currentValue ->      Required. The value of the current element.
//currentIndex ->      Optional. The index of the current element.
//arr ->               Optional. The array the current element belongs to.
//initialValue ->      A value to be passed to the function as the initial value.

 ```

 ---

 ## Conclusion
Now, whenever you try to use map(), filter() and reduce() methods and get confused, just remember the following:

Use map when you want to transform an array
Use filter to select a subset of data from an array, and
Use reduce when you want to return a single value as a result.

https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/
