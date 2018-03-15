function backwardString(string) {
  // base case: string has length of 1
  if (string.length === 1) {

    // if a string has only one character, just log it out
    console.log(string);
  }

  // recursive case: string.length must get closer to 1
  else {

    // console.log the last character from the string
    let lastChar = string[string.length - 1];
    console.log(lastChar);

    // time for the recursive call, we have to make the string shorter
    // since we already logged the last character from the string, let's remove it
    string = string.slice(0, -1);

    // make the recursive call with the shortened string
    backwardString(string);
  }
}
