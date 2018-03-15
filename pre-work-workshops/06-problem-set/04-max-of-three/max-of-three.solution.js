function maxOfThree(num1, num2, num3) {

  // if num1 is larger than or equal to num2 and num3...
  if (num1 >= num2 && num1 >= num3) {

    // ...return num1
    return num1;
  }

  // if num2 is larger than or equal to num1 and num3...
  if (num2 >= num1 && num2 >= num3) {

    // ...return num2
    return num2;
  }

  // else, num3 must be the largest!
  return num3;
}

