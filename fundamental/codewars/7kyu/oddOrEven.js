/* Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

function oddOrEven(array) {
  //enter code here
  let arrSum = array.reduce((a, b) => a + b, 0);
  return arrSum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([0, 1, 5]), 'even')
console.log(oddOrEven([1023, 1, 3]), 'odd')