// if we have an array of numbers [ 1,7,9,14,17] complete the function returnMinum that returns the mininum value


const arr = [1, 7, 9, 14, 17]
function returnMinum(arr) {

  // use math min method(spread the arr)
  return Math.min(...arr)
}

console.log(returnMinum(arr))



//Another solution
function returnMaxnum(arr) {
  // set the first index to minimum number
  let maxNum = arr[0];

  //loop the array from second index
  for (let i = 1; i < arr.length; i++) {

    //if current index number is less than max num
    if (arr[i] > maxNum) {

      //reassign the current index to the max number
      maxNum = arr[i]
    }
  }

  return maxNum;
}

console.log(returnMaxnum(arr))