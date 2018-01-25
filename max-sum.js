'use strict';

let inputArray = [ 4, 6, -3, 5, -2, 1];

const findTheMaxSum = (inputArray) => {

  let currentSum = 0;
  let maxSum = 0;
    
  for (let i = 0; i < inputArray.length; i++) {
    let item = inputArray[i];
    currentSum = Math.max(0, currentSum + item);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

console.log(findTheMaxSum(inputArray));