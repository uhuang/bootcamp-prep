/*
  This concise solution takes advantage of a pattern that emerges if you look
  at the expected outputs.

  For example:

    rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]

  The new array can be constructed by taking two slices from the original array.
  The first slice is just the number five, which you can get by slicing the
  original array starting with the -1 idx through the end of the array. The
  second slice is [1, 2, 3, 4], which you can get by slicing the original array
  from the beginning through the -1 idx. In both cases, -1 is -rotateNum.

  Once you have the two slices, concat them in the correct order and return.
*/

function rotateArray(originalArray, rotateNum) {
  let front = originalArray.slice(-rotateNum);
  let end = originalArray.slice(0, -rotateNum);

  return front.concat(end);
}
