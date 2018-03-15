function mySlice(originalArray, startIdx, endIdx) {

  // if the startIdx is undefined...
  if (startIdx === undefined) {

    // ...start at the beginning of the original array
    startIdx = 0;
  }

  // if the startIdx is a negative number...
  else if (startIdx < 0) {

    // ...subtract the startIdx from the length of the array to get the correct startIdx
    startIdx = originalArray.length + startIdx;
  }

  // if the endIdx is undefined...
  if (endIdx === undefined) {

    // ...set it at the end of the original array
    endIdx = originalArray.length;
  }

  // if the endIdx is a negative number...
  else if (endIdx < 0) {

    // ...subtract endIdx from the length of the array to get the correct endIdx
    endIdx = originalArray.length + endIdx;
  }

  let arrayCopy = [];

  // loop through originalArray, starting at the startIdx and ending just before the endIdx
  for (let i = startIdx; i < endIdx; i++) {

    // store the element from the originalArray in a variable
    let element = originalArray[i];

    // push the element into the arrayCopy
    arrayCopy.push(element);
  }

  return arrayCopy;
}
