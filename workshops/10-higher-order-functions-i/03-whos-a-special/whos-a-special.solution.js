function whosASpecial(specialPets) {
  let truth = '';

  // passing an anoymous function into forEach
  specialPets.forEach(function(petObject, idx) {

    // the anonymous function concatenates the new string onto the truth value
    truth += petObject.name + ' the ' + petObject.species + ' is very special!';

    // if the current element is not the last element...
    if (idx < specialPets.length - 1) {

      // ... add a space between this element and the next element
      truth += ' ';
    }
  });

  return truth;
}

// alernative solution using a named function, ES6 string interpolation, and join
function whosASpecial(specialPets) {
  let results = [];

  specialPets.forEach(pushStringOntoResults);

  function pushStringOntoResults(petObject) {
    results.push(`${petObject.name} the ${petObject.species} is very special!`);
  }

  return results.join(' ');
}
