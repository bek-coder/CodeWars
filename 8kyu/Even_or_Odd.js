// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd number

// My solution:
// 1-method:
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
/////////////////////////////////////////////

// 2-method:
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
