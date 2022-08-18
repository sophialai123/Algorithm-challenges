/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A" */

const getMiddle = (s) => {
  //check if string length is odd or even;
  let stringArr = s.split('');
  let middleChar;
  if (stringArr.length % 2 === 0) {
    middleChar = stringArr[Math.floor((stringArr.length - 1) / 2)] + stringArr[Math.round((stringArr.length - 1) / 2)]
  } else {
    middleChar = stringArr[Math.floor((stringArr.length) / 2)]
  }
  return middleChar;
}


console.log(getMiddle("testing"))
console.log(getMiddle("test"))

module.exports = { getMiddle };

//another solution
function getMiddle2(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle2("middle"))
console.log(getMiddle2("testi"))


//another solution
function getMiddle3(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
}

console.log(getMiddle3("middleings"))
console.log(getMiddle3("testing"))