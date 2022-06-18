// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// n is an int with the range[1, 300,000]
// s only consists only"a" and "b", or just "a" or just"b" return true;
// "a" must before "b" return true, otherwise false;

// all the index of "a" must less than "b"; return true;


let N = ['abba', 'aabbb', 'aaa', 'baab', 'ba', 'bb', 'aab', 'accc', 'abba']

function solution(S) {
  
  let regex = /^a*b*$/g;
  let newArray = []
  
  S.map((s => s.match(regex) != null ? newArray.push(true) : newArray.push(false)))
  return newArray;
}

console.log(solution(N))
