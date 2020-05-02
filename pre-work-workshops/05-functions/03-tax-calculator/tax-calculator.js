// YOUR CODE BELOW
function taxCalculator(itemPrice, state) {
    if (state === 'NY') {
        return itemPrice * 1.04;
    }
    else if (state === 'NJ') {
        return itemPrice * 1.06625;
    }
}