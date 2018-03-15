function theTruthCounts(values) {
  let count = 0;

  // loop through every element in the array
  for (let i = 0; i < values.length; i++) {
    let element = values[i];

    // if the current element is another array...
    if (Array.isArray(element)) {

      // ...get the count of truthy elements in that array, and add them to the count
      count += theTruthCounts(element);
    }

    // otherwise, the element is just a value
    else {

      // if the value is truthy...
      if (element) {

        // increment the count by one
        count++;
      }
    }
  }

  // return the count after the loops
  return count;
}
