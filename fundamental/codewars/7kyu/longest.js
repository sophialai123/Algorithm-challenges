/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

example:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"s
 */

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
let c = "loopingisfunbutdangerous";
let d = "lessdangerousthancoding";

function longest(s1, s2) {

  let strArray = (s1 + s2).split('');
  let uniqueString = strArray.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
  }).join('')

  let combinedStr = uniqueString.split('').sort().join('')
  return combinedStr;
}

console.log(longest(a, b));
console.log(longest(c, d))



//another solution
const longest2 = (s1, s2) => [...new Set(s1 + s2)].sort().join('')
console.log(longest2(a, b));
console.log(longest2(c, d))



//fillter unique string 
let st = "essdangerousthancoding".split('');
let uniqueString = st.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
})

console.log(uniqueString)
