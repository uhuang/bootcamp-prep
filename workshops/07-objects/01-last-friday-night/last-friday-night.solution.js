function lastFridayNight(transactions){
  let total = 0;

  // loop through all of the transactions
  for (let i = 0; i < transactions.length; i++) {

    // store each transaction in a variable (optional)
    let transaction = transactions[i];

    // add the value stored in the object's amount property to the running total
    total += transaction.amount;
  }

  // return total after the for loop
  return total;
}
