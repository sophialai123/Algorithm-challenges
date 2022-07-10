

/* Longest Word
Have the function LongestWord(sen) take the sen parameter being
 passed and 
 
 1. return the largest word in the string. 

 2. If there are two or more words that are the same length, 

 3. return the first word from the string with that length. 

 4.Ignore punctuation and assume sen will not be empty. 

Examples
Input: "fun&!! time" Output: time 
Input: "I love dogs" Output: love
 
 */

function LongestWords(sen) {
  //Remove not alphanumeric characters from string
  sen = sen.replace(/[^a-zA-Z ]/g, "");
  // removes whitespace from both ends of a string 
  //and returns a new string, without modifying the original string.
  sen = sen.trim()
  let arr = sen.split(" ");
  //sort the longest the word
  arr.sort((a, b) => {
    return b.length - a.length
  })
  //the longest word
  return arr[0]
}
console.log(LongestWords("I love dogs"))
console.log(LongestWords("yo i am cool blue zook a !@     !    "))


//for loop method
const LongestWord = function (sen) {
  let sentence = sen.replace(/[^a-zA-Z ]/g, "")
  console.log(sentence);
  sentence = sentence.trim();
  console.log(sentence);
  sentence = sentence.split(" ");
  console.log(sentence);
  let biggestLength = 0;
  let biggestWord;
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i].length > biggestLength) {
      biggestLength = sentence[i].length;
      biggestWord = sentence[i];
    }
  }
  // console.log(biggestWord);
}


// LongestWord("yo i am cool blue zook a !@     !    ");

// LongestWord("fun & !!time");




//sort method
const array = ["hello", "hi", "water", "pop"];
const asc = array.sort((a, b) => b.length - b.length);
console.log(asc); // ["hi", "pop", "hello", "water"]