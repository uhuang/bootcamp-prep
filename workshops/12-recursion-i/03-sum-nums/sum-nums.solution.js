function sumNums(num) {
  // base case: if num is 1, the sum of all numbers between 1 and 1 is 1
  if (num === 1) {
    return 1;
  }

  // recursive case: num must get closer to 1
  // add together the current num plus the sum of all the remaining numbers
  let sum = num + sumNums(num - 1);

  // return the sum
  return sum;
}
