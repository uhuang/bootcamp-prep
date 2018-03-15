function zooInventory(zoo) {

  // create a new array to hold the finished sentences
  let sentences = [];

  // loop through the entire zoo array
  for (let i = 0; i < zoo.length; i++) {

    // store the current animal
    let animal = zoo[i];

    // store the name of the current animal
    let name = animal[0];

    // store the species of the current animal
    let species = animal[1][0];

    // store the age of the current animal
    let age = animal[1][1];

    // use string interpolation and our well-named variables to contruct the sentence
    let sentence = `${name} the ${species} is ${age}.`

    // push the sentence into the sentences array
    sentences.push(sentence);
  }

  // return the sentences array after the for loop
  return sentences
}

/*
  the alternative solution below doesn't store the values from the zoo array in
  their own variables. although this solution requires fewer lines of code, it
  is much harder to read.
*/

function zooInventory(zoo) {
  let sentences = [];

  for (let i = 0; i < zoo.length; i++) {
    sentences.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`)
  }

  return sentences
}
