/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
Sample Input: 07:05:45PM;
Sample Output: 19:05:45;

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Return s: string: the time in 24 hour format
*/

function timeConversion() {
  // Write your code here
  let time = new Date().toLocaleTimeString();
  console.log(time)

}

timeConversion()





const convertTime12to24 = time12h => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};

var convertedTime = convertTime12to24("01:00 PM");
console.log(convertedTime);

