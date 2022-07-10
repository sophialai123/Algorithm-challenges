/* Summation
Write a program that finds the summation of every number from 1 to num.The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */

/* The argument(changable) is the actual value supplied to a function, 
whereas the parameter is the variable inside the definition of the function. */
const summation = function (num) {
  let sum = 0;
  // Code here
  for (let i = 0; i <= num; i++) {
    sum += i
  }
  return sum;
}

// console.log(summation(1), 1)
// console.log(summation(8), 36)



//another solution
const summation4 = num => (
  Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
);

//console.log(summation4(8), 36)




const summation3 = n => n * (n + 1) / 2;
console.log(summation3(8), 36)


//very different solution
function summation5(num) {
  return num * (num + 1) / 2
}

console.log(summation5(8), 36)
