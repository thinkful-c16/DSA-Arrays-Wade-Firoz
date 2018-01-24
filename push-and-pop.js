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
// ===after pushing 5 new values===
// Array { length: 6, _capacity: 12, ptr: 3 }
// Length has increased to 6 because we have pushed 6 items altogether to the array
// Capacity has increased to 12 because when _resize was called on the 4th push, it was passed a size of (this.length(3)+ 1) * Array.SIZE_RATIO(3))
// ptr position reflects where the resize took place on push # 4 -> value of the head from push #1, where resize method is first called, now translates to ptr value after second resize.