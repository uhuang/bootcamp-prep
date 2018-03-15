function veryOddMutant(allTheNums) {
  let count = 0;

  // loop through all of the numbers
  for (let i = 0; i < allTheNums.length; i++) {
    let num = allTheNums[i];

    // if a number is even...
    if (!(num % 2)) {

      // ...replace it with the string normie and increment the counter
      allTheNums[i] = 'normie';
      count++;
    }
  }

  return count;
}
