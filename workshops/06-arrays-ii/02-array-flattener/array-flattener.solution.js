function arrayFlattener(twoDimensionalArray) {

  // create the array to return at the end of the function
  let flatArray = [];

  // loop through the original twoDimensionalArray
  for (let i = 0; i < twoDimensionalArray.length; i++) {

    // store each element in a variable (optional)
    let element = twoDimensionalArray[i];

    // if the element is an array...
    if (Array.isArray(element)) {

      // loop through the inner array
      for (let j = 0; j < element.length; j++) {

        // store each element from the inner array in a variable (also optional)
        let innerElement = element[j];

        // push each element from the inner array into the flatArray
        flatArray.push(innerElement);
      }
    }

    // else, the element is just a number and can be pushed into flatArray
    else {
      flatArray.push(element);
    }
  }

  // return the flatArray after the for loop
  return flatArray;
}

// alternative solution using concat
function arrayFlattener2(twoDimensionalArray) {
  let flatArray = [];

  for (let i = 0; i < twoDimensionalArray.length; i++) {
    let element = twoDimensionalArray[i];

    // if the element is an array...
    if (Array.isArray(element)) {

      // ...just concat the array onto flatArray
      flatArray = flatArray.concat(element);
    }
    else {
      flatArray.push(element);
    }
  }

  return flatArray;
}
