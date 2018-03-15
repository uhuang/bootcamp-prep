function callThemAll(object, argument) {

  // create an array to store the returned values from the methods
  let methodResults = [];

  // loop through all of the keys in the object
  for (let key in object) {
    let currentValue = object[key];

    // if the currentValue is a method in the object...
    if (typeof currentValue === 'function') {

      // ...call the method, passing in the argument
      let methodResult = currentValue(argument);

      // push the value returned by the method into the methodResults array
      methodResults.push(methodResult);
    }
  }

  return methodResults;
}
