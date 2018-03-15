// the first number is defined when timesTable is called
function timesTable(num1) {

  // the second number is defined when the returned function is called
  return function(num2) {

    // the returned function accesses num1 via closure
    return num1 * num2;
  }
}
