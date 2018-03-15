function cacheSavings(callback) {

  // create an object to store the returned values
  // the keys will be the arguments given to the callback
  // the values will be the returned value from the callback
  let cache = {};

  return function(argument) {

    // if the argument is not a key in the cache already...
    if (!(argument in cache)) {

      // ...call the callback and get the result
      let callbackResult = callback(argument);

      // then, add the argument and result to the cache
      cache[argument] = callbackResult;
    }

    // return the cached value
    return cache[argument];
  }
}
