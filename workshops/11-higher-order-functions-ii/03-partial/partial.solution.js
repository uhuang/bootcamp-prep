// the first argument is defined when partial is called
function partial(callback, firstArg) {

  // the second argument is defined when the returned function is called
  return function(secondArg) {

    // when the returned function is called, it calls the callback, accessing
    // the callback and the firstArg with closure
    return callback(firstArg, secondArg);
  }
}
