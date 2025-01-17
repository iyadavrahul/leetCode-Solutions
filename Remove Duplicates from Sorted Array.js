var removeDuplicates = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (output.includes(nums[i])) continue;
    else {
      output.push(nums[i]);
    }
  }
  return output;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
