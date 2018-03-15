function callCount() {
  // create the count variable in the scope of the outer function
  let count = 0;

  // callCount must return a new function
  return function() {

    // when the new function is called, it modifies the count variable in the outer function's scope
    count++;

    // the new function returns the count after incrementing it
    return count;
  }
}
