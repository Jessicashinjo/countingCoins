// Write a program that will convert a dollar amount to the number of coins
// that make up the amount. Use the common American coins of quarters, dimes,
// nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var change = (0.66 * 100);

function coinCounter () {

  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = Math.floor(change / 25);
  var quarter = Math.floor(change % 25);
  coinPurse.dimes = Math.floor(quarter / 10);
  var dime = Math.floor(quarter % 10);
  coinPurse.nickels = Math.floor(dime / 5);
  var nickel = Math.floor(dime % 5);
  coinPurse.pennies = Math.floor(nickel / 1);
  return coinPurse;
  console.log(coinPurse);
}

var coins = coinCounter();
console.log(coins);




