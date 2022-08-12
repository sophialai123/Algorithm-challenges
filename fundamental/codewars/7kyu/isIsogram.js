/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. 

Example:
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

//tested solution
function isIsogram2(str) {
  return !str.match(/([a-z]).*\1/i);;
}
/* console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2("isIsogram"))
console.log(isIsogram2("aba"))
console.log(isIsogram2("")) *///an empty string is a valid isogram


function charRepeats(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false; // repeats
    }
  }
  return true;
}

console.log(charRepeats("aba"))



//nested for loop solution
function isIsogram(str) {
  //let i, j;
  //str = str.toLowerCase();
  for (leti = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j)
      if (str[i] === str[j])
        return false;
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isIsogram"))
console.log(isIsogram("aba"))
console.log(isIsogram(""))