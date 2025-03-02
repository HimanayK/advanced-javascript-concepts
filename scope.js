const vegetable = 'carrot';
let value;

if(hoisted) {
  var fruit = 'apple';
}

if(!hoisted) {
  var fruit = 'banana';
}

function setString(str) {
  window.str = str;
}
function addTenToNum(num) {
  var ten = 10;
  value = ten + num;
}

setString('Hello World');
addTenToNum(5);

var str = window.str;

// console.log('1: ', hoisted);  //hoisted is not defined
console.log('2: ', fruit);
console.log('3: ', value);
console.log('4: ' , vegetable);
console.log('5: ', str);
console.log('6: ', ten);
/*
1:
›
2: banana
›
3: 15
›
4: carrot
›
5: Hello World
›
ReferenceError: ten is not defined  */