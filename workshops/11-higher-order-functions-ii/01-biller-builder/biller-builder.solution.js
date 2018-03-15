// solution that literally returns a different named function for each state
function billerBuilder(state) {
  if (state === 'NY') {
    return applyNYTaxes;
  }

  return applyNJTaxes;

  function applyNYTaxes(price) {
    return price * 1.03 * 1.04;
  }

  function applyNJTaxes(price) {
    return price * 1.05 * 1.06625;
  }
}

// another solution that returns one of two functions, but the functions are
// anonymous
function billerBuilder2(state) {
  if (state === 'NY') {
    return function(price) {
      return price * 1.03 * 1.04;
    }
  }

  return function (price) {
    return price * 1.05 * 1.06625;
  }
}

// solution that returns only one function and uses closure
function billerBuilder3(state) {
  return function(price) {
    if (state === 'NY') {
      return price * 1.03 * 1.04;
    }

    return price * 1.05 * 1.06625;
  }
}
