function countVowels(string) {
  // base case: if string.length === 0, it doesn't have any vowels
  if (string.length === 0) {
    return 0;
  }

  // recursive case: string.length must get closer to 0
  let numVowels = 0;

  // if the first letter is a vowel...
  if (isAVowel(string[0])) {

    // ...increment the numVowels
    numVowels += 1;
  }

  // add the count of vowels in the remaining characters of the string
  numVowels += countVowels(string.slice(1))

  return numVowels;
}


// helper function that returns true if the character is a vowel
function isAVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}
