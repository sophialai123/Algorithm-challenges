/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
  let regex = /[aeiou]/ig;
  let numMatch = str.match(regex);
  return numMatch ? numMatch.length : 0;
}
// console.log(getCount("abracadabra"));
// console.log(getCount("o a kak ushakov lil vo kashu kakao"));
// console.log(getCount("pear tree"));
// console.log(getCount("my pyx"));



//another solution
function getCount2(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount2("pear tree"));
console.log(getCount2("my pyx"));


//solution 3
function getCount3(str) {
  return (str.match(/[aeiou]/g) || []).length
}

console.log(getCount3("pear tree"));
console.log(getCount3("my pyx"));


//testing code
/* describe("Vowels Count Tests", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
}); */