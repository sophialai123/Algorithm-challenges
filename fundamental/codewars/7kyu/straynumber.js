/* Find the stray number
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3) */

const arr1 = [1, 1, 2]; //return 2
const arr2 = [17, 17, 3, 17, 17, 17, 17]; //return 3


function stray(numbers) {
  //take first element
  let strayChar = numbers[0];

  // see if it is different from the next 2
  if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar;

  // if not find the first value that is different
  for (let i = 1; i < numbers.length; i++) {
    if (strayChar !== numbers[i]) return numbers[i];
  }
}

console.log(stray(arr1));
console.log(stray(arr2));

//use reduce to solve it
//XOR operator in programming use case
/* https://dev.to/bladesensei/xor-operator-in-programming-use-case-34ng */
const array = [10, 3, 20, 10, 3, 20, 10]
const array2 = [3, 3, 3, 3, 3, 20, 3]
const stray2 = nums => nums.reduce((a, b) => a ^ b);
console.log(stray2(array));
console.log(stray2(array2));

//another solution
const stray3 = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

console.log(stray3(arr2))