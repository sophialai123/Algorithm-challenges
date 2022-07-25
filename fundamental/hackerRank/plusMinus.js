/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example:

Input Format: arr = [-4, 3, -9, 0, 4, 1];

Sample Output:

0.500000
0.333333
0.166667

*/


console.time("Forloop methods");
arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let neutrals = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      neutrals++
    }
  }

  const positiveRatio = positives / arr.length;
  const negativeRatio = negatives / arr.length;
  const neutralRatio = neutrals / arr.length;

  // console.log(`${positiveRatio} ${negativeRatio} ${neutralRatio}`)
  return `${positiveRatio.toFixed(6)} ${negativeRatio.toFixed(6)} ${neutralRatio.toFixed(6)}`
}

console.log(plusMinus(arr))
console.timeEnd("Forloop methods");





console.time("Fillter methods");
//passed solution
function plusMinus2(arr) {
  let positive = arr.filter(number => number > 0).length / arr.length;
  let negative = arr.filter(number => number < 0).length / arr.length;;
  let zeronums = arr.filter(number => number == 0).length / arr.length;;
  console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
}

plusMinus2(arr)
console.timeEnd("Fillter methods");