
/* 
First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Examples
Input: "coderbyte" Output: etybredoc
Input: "I Love Code" Output: edoC evoL I */


function FirstReverse(str) {
  return str.split('').reverse().join('');
}

console.log(FirstReverse("coderbyte"))
console.log(FirstReverse("I Love Code"))




// let arrs = "I Love Code"