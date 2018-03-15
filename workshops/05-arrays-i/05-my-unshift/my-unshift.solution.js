function myUnshift(originalArray, value) {

  // create a new array, with the value as the first element
  let newArray = [value];

  // loop through the entire originalArray
  for (let i = 0; i < originalArray.length; i++) {

    // store each element in a variable (optional)
    let element = originalArray[i];

    // push every element into the new array
    newArray.push(element);
  }

  // return the new array after the for loop
  return newArray;
}
