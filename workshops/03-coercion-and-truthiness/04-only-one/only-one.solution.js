function onlyOne(value1, value2, value3) {

  // if only the first value is truthy, return true
  if (!!value1 && !value2 && !value3) {
    return true;
  }

  // if only the second value is truthy, return truy
  if (!value1 && !!value2 && !value3) {
    return true;
  }

  // if only the third value is truthy, return true
  if (!value1 && !value2 && !!value3) {
    return true;
  }

  // in any other case, return false
  return false;
}

/*
  this alternative solution combines the three if statements into one. this also
  works and is DRYer than the first solution. but it is arguably a little harder
  to read!
*/

function onlyOne2(value1, value2, value3) {
  if (
      (!!value1 && !value2 && !value3) ||
      (!value1 && !!value2 && !value3) ||
      (!value1 && !value2 && !!value3)
  ) {
    return true;
  }

  return false;
}
