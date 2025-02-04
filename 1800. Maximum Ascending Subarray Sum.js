var maxAscendingSum = function (nums) {
  if (nums.length === 1) return nums[0];
  let output = 0;
  let tempSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) tempSum += nums[i];
    else {
      if (nums[i] === nums[i - 1]) {
        output = Math.max(output, tempSum);
        tempSum = nums[i];
        continue;
      }
      if (nums[i] > nums[i - 1]) {
        tempSum = tempSum + nums[i];
        output = Math.max(output, tempSum);
      }
      if (nums[i] < nums[i - 1]) {
        output = Math.max(output, tempSum);
        tempSum = nums[i];
      }
    }
  }
  return output;
};

console.log(maxAscendingSum([5, 5, 6, 6, 6, 9, 1, 2]));
// console.log(maxAscendingSum([10]));
// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
// console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
// console.log(maxAscendingSum([10, 20, 30, 40, 50]));
