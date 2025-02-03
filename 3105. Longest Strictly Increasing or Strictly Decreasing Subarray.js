var longestMonotonicSubarray = function (nums) {
  let increasingLength = 1,
    decreasingLength = 1;
  let output = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      decreasingLength++;
      output = Math.max(increasingLength, output);
      increasingLength = 1;
    }
    if (nums[i - 1] < nums[i]) {
      increasingLength++;
      output = Math.max(decreasingLength, output);
      decreasingLength = 1;
    }
    if (nums[i - 1] === nums[i]) {
      output = Math.max(increasingLength, decreasingLength, output);
      increasingLength = 1;
      decreasingLength = 1;
    }
  }
  return Math.max(increasingLength, decreasingLength, output);
};

console.log(longestMonotonicSubarray([9, 8, 8, 8]));
// console.log(longestMonotonicSubarray([1, 5, 10, 3]));
// console.log(longestMonotonicSubarray([1, 5, 2, 7]));
// console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));
// console.log(longestMonotonicSubarray([3, 3, 3, 3]));
// console.log(longestMonotonicSubarray([3, 2, 1]));
// console.log(longestMonotonicSubarray([1, 10, 10]));
// console.log(longestMonotonicSubarray([1, 3, 1, 1]));
