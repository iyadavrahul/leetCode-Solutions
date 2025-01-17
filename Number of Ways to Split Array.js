// var waysToSplitArray = function (nums) {
//   let output = 0;
//   const numbers = nums;
//   for (let i = 0; i < nums.length - 1; i++) {
//     // console.log(i);
//     // console.log(nums[i], nums[i + 1]);
//     // console.log(nums[i], nums[nums.length - i - 1]);
//     if (nums[i] + nums[i + 1] < nums[nums.length - i - 1]) {
//       console.log("Invalid", nums[i] + nums[i + 1]);
//       continue;
//     } else {
//       let firstArray = numbers.slice(0, i + 1).reduce((item, acc) => {
//         return acc + item;
//       });
//       let secondArray = numbers
//         .slice(i + 1, nums.length)
//         .reduce((item, acc) => {
//           return acc + item;
//         });
//       console.log("Valid", firstArray, secondArray);
//       if (firstArray >= secondArray) output++;
//     }
//     // console.log(myArr);
//   }
//   return output;
// };
// var waysToSplitArray = function (nums) {
//   let output = 0;
//   let totalSum = nums.reduce((item, acc) => {
//     return acc + item;
//   }, 0);
//   let leftSum = 0;
//   for (const num of nums) {
//     totalSum += num;
//   }
//   for (let i = 0; i < nums.length - 1; i++) {
//     // let firstArray = nums.slice(0, i + 1).reduce((item, acc) => {
//     //   return acc + item;
//     // });
//     // let secondArray = nums.slice(i + 1, nums.length).reduce((item, acc) => {
//     //   return acc + item;
//     // });
//     // if (firstArray >= secondArray) output++;
//     // leftSum += nums[i];
//     // let rightSum = totalSum - leftSum;
//     // if (leftSum >= rightSum) output++;
//   }
//   return output;

const numbers = require("./testCaseNums");

// };
var waysToSplitArray = function (nums) {
  let totalSum = 0;
  let leftSum = 0;
  let output = 0;
  for (let num of nums) {
    totalSum += num;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    let rightSum = totalSum - leftSum;
    if (leftSum >= rightSum) {
      output++;
    }
  }
  return output;
};

// let nums = [10, 4, -8, 7];
// console.log(waysToSplitArray([2, 3, 1, 0]));
// console.log(waysToSplitArray([10, 4, -8, 7]));

console.log(waysToSplitArray(numbers));
