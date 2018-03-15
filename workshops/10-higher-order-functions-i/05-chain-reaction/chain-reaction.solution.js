function chainReaction(value, callbacks) {

  // for each callback in callbacks...
  callbacks.forEach(function(callback) {

    // ...pass the value into the callback, and reassign the value to its output
    value = callback(value);
  })

  return value;
}
