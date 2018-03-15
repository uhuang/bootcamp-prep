function zeroDarkThirty(originalValue) {
  if (originalValue === 0) {
    return NaN
  }

  // explicitly coerce the originalValue to a string
  originalValue = String(originalValue);

  // create a new value
  let newValue = '';

  // loop through the originalValue
  for (let i = 0; i < originalValue.length; i++) {

    // store the current character from the string in a variable
    let currentChar = originalValue[i];

    // as long as the char isn't a zero, concat it onto the newValue string
    if (currentChar !== '0') {
      newValue += currentChar;
    }
  }

  // explicitly coerce the newValue to a number as it's returned
  return Number(newValue);
}
