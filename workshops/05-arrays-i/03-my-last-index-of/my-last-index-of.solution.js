function myLastIndexOf(array, searchValue, startIdx) {

  // if the user hasn't defined a startIdx, set it as the last index in the array
  if (startIdx === undefined) {
    startIdx = array.length - 1;
  }

  // loop through the array, starting at the startIdx
  for (let i = startIdx; i >= 0; i--) {

    // store the element in a variable (optional)
    let element = array[i];

    // if the element is equal to the search value...
    if (element === searchValue) {

      // ... return the current index
      return i;
    }
  }

  // return -1 only after we've finished the for loop
  return -1;
}
