function mySplice(array, startIndex, deleteCount, newValue) {
  let removedElements = [];
  let keptElements = [];

  // keep all the elements before the start index
  for (let i = 0; i < startIndex; i++) {
    let element = array[i];
    keptElements.push(element);
  }

  // now we're at the startIdx; add the newValue to the keptElements array
  if (newValue !== undefined) {
    keptElements.push(newValue);
  }

  // add the correct number of elements to remove to the removedElements array
  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    let element = array[i];
    removedElements.push(element);
  }

  // add the remaining elements to the keptElements array
  for (let i = startIndex + deleteCount; i < array.length; i++) {
    let element = array[i];
    keptElements.push(element);
  }

  // remove all elements from the original array
  while (array.length) {
    array.pop();
  }

  // push only those element to keep back into array
  for (let i = 0; i < keptElements.length; i++) {
    let element = keptElements[i];
    array.push(element);
  }

  return removedElements;
}
