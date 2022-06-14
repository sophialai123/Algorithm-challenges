// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// n is an int with the range[1, 300,000]
// s only consists only"a" and "b", or just "a" or just"b" return true;
// "a" must before "b" return true, otherwise false;

// all the index of "a" must less than "b"; return true;

N = ["aabbb", "aaa", "baab", "ba", "bb", "aab", "abba"];

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  //loop through each letter, j is index if S
  for (let j = 0; j < S.length; j++) {

    // find the word includes a and b, return true;
    a = S.includes("a");
    b = S.includes("b");
    //console.log(S[j]) // return the first letter

    //find all the index of "a"
    aIndexAll = [];
    for (let i = 0; i < S.length; i++) {
      if (S[i] === "a") {
        aIndexAll.push(i)
      }
    }

    //find all the index of "b"
    bIndexAll = [];
    for (let k = 0; k < S.length; k++) {
      if (S[k] === "b") {
        bIndexAll.push(k)
      }
    }
    //compare each a index wiht each b index in the letter,
    // use reduce function
    for (let e = 0; e < aIndexAll.length; e++) {
      console.log(e)

      for (let p = 0; p < bIndexAll.length; p++) {

        if (aIndexAll[e] < bIndexAll[p] + 1 && aIndexAll[e] !== bIndexAll[p]) {
          return true
        }
      }
      return false;

    }

  }

  // console.log(aIndexAll);
  // console.log(bIndexAll);
  return false;
}

console.log(solution("bbbb"));



// const ab = [1, 2, 3];
// const ba = [1, 2, 3];
// const str = 'a';
// console.log(str)
// const strObj = new String('a');
// console.log(strObj)



//Finding all indexes of a specified character within a string
// var str = "scissors";
// var indices = [];
// for (var i = 0; i < str.length; i++) {
//   if (str[i] === "s") indices.push(i);
// }
// if (str[i] === "s") indices.push(i + 1);

// console.log(indices)



//
// S = "ababbbb";
// console.log(S.split())
// S.split().forEach((item, index) => {
//   console.log(item.indexOf("b"), index)
// }