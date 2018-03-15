function evenAndOdd(originalArray) {

  // create arrays where we'll store even and odd numbers
  let evenNums = [];
  let oddNums = [];

  // loop through the entire original array
  for (let i = 0; i < originalArray.length; i++) {

    // store each number in a variable (optional)
    let num = originalArray[i];

    // if the number is odd...
    if (num % 2) {

      // ...push it into the oddNums array
      oddNums.push(num);
    }

    // else, the number must be even
    else {

      // push the number into the evenNums array
      evenNums.push(num);
    }
  }

  // create and return a new array, with the subarrays at the correct indices
  return [evenNums, oddNums];
}
