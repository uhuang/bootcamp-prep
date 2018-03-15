function sumDigits(number) {
  // coerce the number to a string
  let numString = String(number);

  // base case: if string.length === 1, there's only one digit!
  if (numString.length === 1) {
    return number;
  }

  // recursive case: must make the number of digits in the number closer to 1
  let sum = 0;

  // add the numeric value of the first character in numString to the sum
  sum += Number(numString[0]);

  // add the sum of the remaining digits in the string
  // have coerce the string back into a number, since sumDigits accepts a number
  sum += sumDigits(Number(numString.slice(1)))

  return sum;
}
