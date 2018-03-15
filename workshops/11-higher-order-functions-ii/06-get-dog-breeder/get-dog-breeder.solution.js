function getDogBreeder(defaultName, defaultAge) {
  return dogBreeder;

  function dogBreeder(name, age) {

    // if the user didn't provide a second argument...
    if (age === undefined) {

      // ...check to see if the user inputted the age as the first argument
      if (typeof name === 'number') {

        // if the first argument is the age, assign that value to the age parameter
        age = name;

        // set name to null, since we don't know what the name is
        name = null;
      }

      // otherwise, use the default value for age
      else {
        age = defaultAge;
      }
    }

    // if we don't have a name yet...
    if (!name) {

      // ...use the default name here
      name = defaultName;
    }

    let newDog =  {
      name: name,
      age: age
    };

    return newDog;
  }
}


// alternative solution using ES6 default parameters
function getDogBreeder(defaultName, defaultAge) {
  return dogBreeder;

  function dogBreeder(name=defaultName, age=defaultAge) {
    if (typeof name === 'number') {
      age = name;
      name = defaultName;
    }

    let newDog =  {
      name: name,
      age: age
    };

    return newDog;
  }
}
