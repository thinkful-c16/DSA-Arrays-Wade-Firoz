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
  arr.pop();
  arr.pop();
  arr.pop();
  arr.remove(0);
  arr.remove(0);
  arr.remove(0);
  arr.push('tauhida');

  console.log(arr.get(0));
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



// === AFTER POP x3 ===

//Array { length: 6, _capacity: 12, ptr: 3 }
//Array { length: 3, _capacity: 12, ptr: 3 }

// Only the length of the array changes; decreased by the number of times pop was called.

// Print first item in array: console.log(arr.get(0))

// printing 'tauhida' results in NaN because the memory type we're using isn't for strings, but the item does exist there


//purpose of _resize():  Allows us to push and size predictively to resize the capacity of our array which is greater than our length so as we push new items in, we don't have to copy the items every time (because 'copy' is memory expensive).
