function myOr(value1, value2, value3) {

  // if the first value is truthy, return it!
  if (!!value1) {
    return value1;
  }

  // if the second value is truthy, return it!
  if (!!value2) {
    return value2;
  }

  // if the third value is truthy, return it!
  if (!!value3) {
    return value3;
  }

  // else, all of the values are falsey. return the last value.
  return value3;
}

function myAnd(value1, value2, value3) {

  // if the first value is falsey, return it
  if (!value1) {
    return value1;
  }

  // if the second value is falsey, return it
  if (!value2) {
    return value2;
  }

  // if the third value is falsey, return it
  if (!value3) {
    return value3;
  }

  // else, all of the values are truthy. return the last value
  return value3;
}
