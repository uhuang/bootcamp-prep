function functionLogger(callback, argument) {

  // log out the first message before calling the callback
  console.log('Function running');

  // run the callback, capturing the returned value in a variable
  let returnValue = callback(argument);

  // log out the second message
  console.log('Function complete');

  // return the returnValue after logging out the second message
  return returnValue;
}
