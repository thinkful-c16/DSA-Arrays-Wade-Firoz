'use strict';

const urlify = (string) => {

  let expression = / /g;
  let newString = string.replace(expression, '%20');
  console.log(newString);

  // for (let i = 0; i < string.length; i++) {
  //   if (string[i]) {
  //     console.log(`I\'m here`)
  //     string.splice(i, 1, '%20');
  //   }
  //   console.log('every iteration:', string[i]);
  // }
};

urlify('www.thinkful.com /tauh ida parv een');