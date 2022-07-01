/* Build a function that returns an array of integers from n to 1 where n > 0.

Example: n = 5 -- > [5, 4, 3, 2, 1] 

https://www.w3schools.com/jsref/jsref_from.asp

Array.from(object, mapFunction, thisValue)
*/



const reverseSeq = n => {

  return Array.from({ length: n }, (v, k) => k + 1).reverse();
};


console.log(reverseSeq(5))



Array.from(Array(10).keys())
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.from({ length: 5 }, (v, k) => k + 1);
// [1,2,3,4,5]



//Another solution
const reverseSeqs = n => {
  let arr = [];
  //reverse loop
  for (let i = n; i > 0; i--) {
    arr.push(i);
  } return arr;
};


console.log(reverseSeqs(10))



//Another solution
const reverseSeq3 = n => {
  return Array(n).fill(0).map((e, i) => n - i);
};

console.log(reverseSeq3(5))




//Another solution
const reverseSeq4 = n => [...Array(n)].map((_, i) => n - i);
console.log(reverseSeq4(6))


//Another solution
const reverseSeq5 = n => Array.from(Array(n).keys(), x => x + 1).reverse();
console.log(reverseSeq5(7))