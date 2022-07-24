/* 
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1,3,5,7,9];

The minimum sum is: 1+3+5+7 = 16;
  
The maximum sum is: 3+5+7+9 = 24;

The function prints :16 24 

*/
let arr = [1, 3, 5, 7, 9];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [7, 69, 2, 221, 8974]


function miniMaxSum(arr) {

  // Write your code here 
  let minMaxNum = [];
  //without modity the array
  let minArr = [...arr];

  let minNumIndex = minArr.sort((a, b) => a - b);
  minArr.splice(minNumIndex, 1);
  let maxSum = minArr.reduce((a, b) => a + b);

  let maxNumIndex = arr.sort((a, b) => b - a).splice(0, 1);
  let minSum = arr.reduce((a, b) => a + b);
  minMaxNum.push(minSum);
  minMaxNum.push(maxSum);
  return minMaxNum;
}

console.log(miniMaxSum(arr2))


// let minMaxNum = [];
// let minNum = Math.min(...arr);
// let maxSum = arr.reduce((a, b) => a + b) - minNum;
// let maxNum = Math.max(...arr);
// let minSum = arr.reduce((a, b) => a + b) - maxNum;
// minMaxNum.push(minSum, maxSum)



//passed solution
function miniMaxSum2(arr) {
  // Write your code here
  let sums = [];
  for (var i = 0; i < arr.length; i++) {
    var num = arr.shift();
    var sum = arr.reduce(function (acc, val) { return acc + val; }, 0);
    sums.push(sum);
    arr.push(num)
  }
  console.log(Math.min(...sums) + " " + Math.max(...sums));
}

miniMaxSum2(arr)