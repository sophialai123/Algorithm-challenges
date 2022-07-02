
//return duplicates numbers in the give an array

const arr = [1, 2, 3, 4, 5, 5, 6, 3, 10, 23];

const duplicatesNum = (arr) => {

  //create an empty array to hold the duplicates number
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {

      // if arr value is the same but the index are not the same
      if (arr[i] == arr[j] && i != j) {
        duplicates.push(arr[j])
      }
    }
  }

  return duplicates;
}

console.log(duplicatesNum(arr));


