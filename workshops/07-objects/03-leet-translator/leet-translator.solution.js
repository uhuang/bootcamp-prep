function leetTranslator(originalString) {

  // we'll use an object to translate letters to leet
  let leetDict = {};

  // loop through every letter in letters
  for (let i = 0; i < letters.length; i++) {

    // store the current letter in a variable
    let letter = letters[i];

    // store the leetChar at the same index in another variable
    let leetChar = leetChars[i];

    // add the letter/leetChar as a key/value pair in the object
    leetDict[letter] = leetChar;
  }

  let leetString = '';

  // loop through the originalString
  for (let i = 0; i < originalString.length; i++) {

    // store the current letter in a variable
    let letter = originalString[i].toLowerCase();

    // get the letter's corresponding leetChar from the leetDict
    let leetChar = leetDict[letter];

    // concat the leetChar onto the leetString
    leetString += leetChar;
  }

  // return the leetString after the for loop
  return leetString;
}
