function myIncludes(array, searchValue) {

  // loop through the entire array
  for (let i = 0; i < array.length; i++) {

    // store each element in a variable (optional)
    let element = array[i];

    // if the element is equal to the value we're searching for...
    if (element === searchValue) {

      // ... return true
      return true;
    }
  }

  /*
    only return false after the for loop is finished, otherwise we may return
    false too soon
  */
  return false;
}
