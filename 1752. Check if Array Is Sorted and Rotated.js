var check = function (nums) {
  // let sortedArray = nums.sort();
  const array = nums.slice();
  let output = false;
  function rotateArray(arr, k) {
    arr = arr.sort((a, b) => a - b);
    return arr.slice(k).concat(arr.slice(0, k));
  }
  for (let i = 0; i < nums.length; i++) {
    let rotated = rotateArray(nums, i + 1);
    // console.log("Sorted ", nums);
    // console.log("Nums   ", array);
    // console.log("Rotated", rotated);
    let counter = 0;
    for (j = 0; j < rotated.length; j++) {
      if (rotated[j] === array[j]) {
        counter++;
      } else {
        break;
      }
    }
    // console.log("Counter", counter);
    if (counter === nums.length) {
      output = true;
      break;
    }
  }
  return output;
};

// let output = false;
console.log(check([9, 10, 1, 2, 3, 3, 4, 4, 7, 8]));
// console.log(check([3, 4, 5, 1, 2]));
// console.log(check([2, 1, 3, 4]));
// console.log(0 % 5);
// console.log(
//   [1, 10, 2, 3, 3, 4, 4, 7, 8, 9].sort((a, b) => {
//     return a - b;
//   })
// );
function rotateLeft(arr, k) {
  // k %= arr.length;
  // console.log("K", k % arr.length);
  console.log(arr.slice(k));
  console.log(arr.slice(0, k));
  return arr.slice(k).concat(arr.slice(0, k));
}
// console.log(rotateLeft([1, 2, 3, 4, 5], 2));
