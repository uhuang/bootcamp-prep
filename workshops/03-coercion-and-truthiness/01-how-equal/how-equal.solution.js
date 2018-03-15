function howEqual(value1, value2) {

  // use === to check if the values are strictly equal
  if (value1 === value2) {
    return 'strictly';
  }

  // use == to check if the values are loosely equal
  else if (value1 == value2) {
    return 'loosely';
  }

  // else, the values must not be equal
  else {
    return 'not equal';
  }
}

/*
  The alternative solution below takes advantage of the the fact that the return
  keyword stops the execution of the function, which makes the else clauses
  unnecessary. Arguably, the code is more readable with the else clauses, so
  it's totally reasonable to use them even if they aren't technically required.
*/

function howEqual2(value1, value2) {
  if (value1 === value2) {
    return 'strictly';
  }

  if (value1 == value2) {
    return 'loosely';
  }

  return 'not equal';
}
