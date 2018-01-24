'use strict';

const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
}

main();

// ===first push===
// Array { length: 1, _capacity: 3, ptr: 0 }
// 
// ===second push===
// Array { length: 6, _capacity: 12, ptr: 3 }
// Length has increased to 6 because we have pushed 6 items altogether to the array
// Capacity has increased to 12 because when _resize was called on the 3rd push, it was passed a size of (this.length(3)+ 1) * Array.SIZE_RATIO(3))
// ptr position also reflects where the resize took place on push # 3.