'use strict';

const urlify = (string) => {

  // let expression = / /g;
  // let newString = string.replace(expression, '%20');
  // console.log(newString);

  let returnString = '';

  for (let i = 0; i < string.length; i++) {

    if (string[i] === ' ') {
      returnString += '%20';
    } else {
      returnString += string[i];
    }
  }
  
  return returnString;
};

console.log(urlify('this should change'));