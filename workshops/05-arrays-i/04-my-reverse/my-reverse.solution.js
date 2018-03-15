function myReverse(originalArray) {
  let reversedArray = [];

  // loop through the original array from back to front
  for (let i = originalArray.length - 1; i >= 0; i--) {

    // store each element in a variable (optional)
    let element = originalArray[i];

    // push each element into the reversedArray
    reversedArray.push(element);
  }

  // return the reversedArray after the for loop
  return reversedArray
}

// alternative solution
function myReverse2(originalArray) {
  let reversedArray = [];

  // while the length of originalArray is greater than 0
  while (originalArray.length) {

    /*
      pop elements off the end of the original array and immediately
      push them into the reversedArray
    */
    reversedArray.push(originalArray.pop())
  }

  return reversedArray
}
