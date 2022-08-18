/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 */

const testing123 = (array) => {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array.length > 0) {
      let newA = `${i + 1}: ${array[i]}`;
      newArray.push(newA)
    }
  }
  return newArray;
}


console.log(testing123(["a", "b", "c"]))


//using map function
const number = array => array.map((n, i) => `${i + 1}: ${n}`);
console.log(number(["a", "b", "c", "d"]))