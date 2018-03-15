function everyWhichWay(num1, num2, target) {
  let result = null;

  if (num1 + num2 === target) {
    result = 'sum';
  }

  if (num1 - num2 === target) {
    result = 'difference';
  }

  if (num1 * num2 === target) {
    result = 'product';
  }

  if (num1 / num2 === target) {
    result = 'fraction';
  }

  return result;
}
