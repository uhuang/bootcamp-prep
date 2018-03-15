function deeperCopy (originalArray) {
  let copy = [];

  for (let i = 0; i < originalArray.length; i++) {
    let element = originalArray[i];

    // if the current element is another array...
    if (Array.isArray(element)) {

      // ...create a new array into which we can copy the elements of the inner array
      let nestedCopy = [];

      for (let j = 0; j < element.length; j++) {
        let innerElement = element[j];
        nestedCopy.push(innerElement);
      }

      // push the copy of the inner array into the copy
      copy.push(nestedCopy)

    // otherwise, just push the element into the copy
    } else {
      copy.push(element);
    }
  }

  return copy;
}
