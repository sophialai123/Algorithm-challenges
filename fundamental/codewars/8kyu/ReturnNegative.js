/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */


//
function makeNegative(num) {
  return -Math.abs(num)
}

console.log(makeNegative(42), -42);



//Another solution
function makeNegatives(num) {
  return num < 0 ? num : -num;
}

console.log(makeNegatives(44), -44);
console.log(makeNegatives(-45), -45);