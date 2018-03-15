function cloneMachine(parent) {
  let clone = {
    name: parent.name + 'Clone',
    species: parent.species,

    // create a new, empty offspring array for the clone
    offspring: []
  };

  // push the name of the clone into the parent's offspring array
  parent.offspring.push(clone.name);

  return clone;
}
