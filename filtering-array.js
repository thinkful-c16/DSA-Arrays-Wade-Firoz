'use strict';

let testArray = [4, 7, 23, 2, 5, 9, 1, 3, 10];
let testCondition = x => x < 5;

const filterArray = (array, condition) => {

  let returnArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!testCondition(array[i])) {
      returnArray.push(array[i]);
    }
  }
  console.log(returnArray);
};

filterArray(testArray, testCondition);