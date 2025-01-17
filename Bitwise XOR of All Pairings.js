// for (const element of nums1) {
//   const value = nums2.map((item) => element ^ item);
//   result.push(...value);
// }
// output = result.reduce((acc, item) => acc ^ item);
// console.log(result);
// const xor = nums1.concat(nums2).reduce((acc, item) => acc ^ item);
// console.log(xor);
// return output;
var xorAllNums = function (nums1, nums2) {
  if (nums1.length % 2 === 0 && nums2.length % 2 === 0) {
    return 0;
  } else if (nums1.length % 2 === 0) {
    // console.log("num1");
    return (output = nums1.reduce((acc, item) => acc ^ item));
  } else if (nums2.length % 2 === 0) {
    // console.log("num2");
    return (output = nums2.reduce((acc, item) => acc ^ item));
  } else {
    const res1 = nums1.reduce((acc, item) => acc ^ item);
    const res2 = nums2.reduce((acc, item) => acc ^ item);
    return res1 ^ res2;
  }
};
console.log(xorAllNums((nums1 = [1, 2]), (nums2 = [3, 4])));
console.log(xorAllNums((nums1 = [25, 29, 3, 10, 0, 15, 2]), (nums2 = [12])));
// console.log(xorAllNums((nums1 = [2, 1, 3]), (nums2 = [10, 2, 5, 0])));
