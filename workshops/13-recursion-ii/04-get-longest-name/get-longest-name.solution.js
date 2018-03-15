function getLongestName(family) {
  let longestName = '';

  // loop through every name in this level of the object
  for (let name in family) {

    // if the current name is longer than our longestName...
    if (name.length > longestName.length) {

      // ...reassign longestName
      longestName = name;
    }

    // if the current person has children...
    if (family[name]) {

      // ...check get the longest name from all of the person's descendants
      let descendantsLongestName = getLongestName(family[name]);

      // if a descendant has a longer name than the current longestName...
      if (descendantsLongestName > longestName) {

        // ...reassign longestName
        longestName = descendantsLongestName;
      }
    }
  }

  // return longestName after looping through every name
  return longestName;
}
