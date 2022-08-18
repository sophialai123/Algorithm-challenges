/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[15, 28, 4, 2, 43]), should return 6 . */
function sumTwoSmallestNumbers(arr) {
  //Code here

  let num = arr.sort((a, b) => a - b);
  return num[0] + num[1];

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13)