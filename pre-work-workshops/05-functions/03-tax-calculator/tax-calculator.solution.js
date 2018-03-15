function lastCharacter(string1, string2) {
  let lastChar1 = string1[string1.length - 1];
  let lastChar2 = string2[string2.length - 1];

  if (lastChar1 === lastChar2) {
    return true;
  }

  return false;
}

// alternative solution that immediately returns the result of the comparison operation!
function lastCharacter(string1, string2) {
  let lastChar1 = string1[string1.length - 1];
  let lastChar2 = string2[string2.length - 1];

  return lastChar1 === lastChar2;
}
