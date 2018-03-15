function veryOdd(allTheNums) {
  let oddNums = [];

  // loop through the original numbers
  for (let i = 0; i < allTheNums.length; i++) {
    let num = allTheNums[i];

    // if a number is odd...
    if (num % 2) {

      // ...push it into the oddNums array
      oddNums.push(num);
    }
  }

  return oddNums;
}
