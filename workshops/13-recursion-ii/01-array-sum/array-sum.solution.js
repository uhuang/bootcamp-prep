function arraySum(array) {
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    let element = array[i];

    // if the current element is an inner array...
    if(Array.isArray(element)) {

      // ...add the sum of the inner array to the sum variable
      sum += arraySum(element);
    }

    // else, the element must be a number; just add it to the sum
    else {
      sum += element;
    }
  }

  return sum;
}
