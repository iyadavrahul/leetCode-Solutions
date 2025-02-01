var isArraySpecial = function (nums) {
  if (nums.length === 1) return true;
  for (let i = 0; i < nums.length - 1; i++) {
    // if (
    //   (nums[i] % 2 === 0 && nums[i + 1] % 2 === 1) ||
    //   (nums[i] % 2 === 1 && nums[i + 1] % 2 === 0)
    // )
    console.log(nums[i] % 2);
    console.log(nums[i + 1] % 2);
    if (nums[i] % 2 === nums[i + 1] % 2) return false;
  }
  return true;
};

// console.log(isArraySpecial([2, 1, 4]));
// console.log(isArraySpecial([1]));
// console.log(isArraySpecial([4, 3, 1, 6]));
console.log(123 % 10);
