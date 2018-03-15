function stringify(callback) {

  // stringify must return a new function
  return function() {

    // the returned function calls the callback
    let callbackResult = callback();

    // before returning the result, coerce the result to a string
    callbackResult = String(callbackResult);

    // return the string value
    return callbackResult;
  }
}
