/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.
difference between 12h and 24h formats is hours, minutes and seconds are the same,
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
Sample Input: 07:05:45PM;
Sample Output: 19:05:45;

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Return s: string: the time in 24 hour format
*/


//2. if the time is 1am to 12pm then as it is;
//3. if the time is 1pm to 11pm then hour + 12

function timeConversion(s) {

  let ampm = s.charAt(8) //12:00:00AM 8 characters
  let hourConvert = '';

  if (ampm == "A") {
    //1. if the time is 12am then covert into 00;
    if (s.substring(0, 2) == "12") {
      hourConvert = "00";
    } else {
      hourConvert = s.substring(0, 2); //as the time it is
    }
  } else { //"P"
    if (s.substring(0, 2) == "12") {
      hourConvert = s.substring(0, 2)
    } else {
      hourConvert = parseInt(s.substring(0, 2), 10) + 12;
    }
    return `${hourConvert}:${s.substring(2, 8)}`
  }
}

console.log(timeConversion('5:00:00 PM'))


/* //indexOf() returns the position of the 
//first occurrence of a value in a string.
if (s.indexOf('PM') > -1) {
  return true or false
  console.log("then do something with PM")
}
//else  then do some other thing with AM

// PM case
if (arr[0] == 12) { // as 12 is the string 
  arr[0] = '12';
} else {
  arr[0] = Number(arr[0]) + 12; // if we add number to string we will get new string like '1312'
}

// AM case
if (arr[0] == 12) {
  arr[0] = '00';
}
// In other cases AM is the same as 24h format */




/* 
indexOf returns a -1 if the search is not in the string. This is because indexOf will return the position of the search term in the string. For example

> -1 is another way of saying !== -1 though I personaly prefer the latter.
*/

let arr = ['50', '00', '00 ', 'PM'];
//The indexOf() method returns -1 if the value is not found.
console.log(arr.indexOf('PM') !== -1) // same as  > -1
console.log(arr.indexOf('AM')) //return -1,no value is found

//passed solution
function timeConversion2(s) {
  const arr = s.slice(0, 8).split(':'); // '00:00:00AM' -> ['00', '00', '00']
  arr[0] = (s.indexOf('PM') > -1) ? //return true or flase
    (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
    (arr[0] == 12 ? '00' : arr[0]);

  //join our array into string
  return arr.join(':');
}


console.log(timeConversion2('8:00:00 PM'))







