/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */



function squareSum(numbers) {

  //reduce must pass initialValue
  return numbers.map((num) => Math.pow(num, 2)).reduce((a, b) => a + b, 0);

}


console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);



// another solution
function squareSums(numbers) {
  //previousValue + (currentValue * currentValue)
  return numbers.reduce((sum, num) => sum + (num * num), 0);
}


console.log(squareSums([1, 2]), 5);
console.log(squareSums([0, 3, 4, 5]), 50);
console.log(squareSums([]), 0);