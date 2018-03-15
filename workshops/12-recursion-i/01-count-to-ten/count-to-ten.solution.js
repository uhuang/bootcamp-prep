function countToTen(num) {
  // base case, num is 10!
  if (num === 10) {

    // log out 10, but don't recursively call the function
    console.log(num);
  }

  // recursive case, num must get closer to base case (10)
  else {

    // log out the number
    console.log(num);

    // make the recursive call, incrementing num up toward 10
    countToTen(num + 1);
  }
}
