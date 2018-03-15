function myForEach(array, callback) {

  // loop through the array
  for (let i = 0; i < array.length; i++) {

    // store the current element of the array in a variable
    let element = array[i];

    // pass the current element, and its index, into the callback
    callback(element, i);
  }

  // nothing to return :]
}
