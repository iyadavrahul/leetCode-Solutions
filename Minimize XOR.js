var minimizeXor = function (num1, num2) {
  let binaryNum1 = num1.toString(2);
  let binary2 = num2.toString(2);

  console.log("Binary representation of num1:", binaryNum1);
  console.log("Binary representation of num2:", binary2);
  if (num1 === num2) return num1;
  let output = Infinity;
  let min = 0;
  let binaryNum2 = num2
    .toString(2)
    .split("")
    .filter((item) => item === "1").length;
  // let binaryNum2 = num2.toString(2);
  console.log(binaryNum2);
  const maxValue = Math.max(num1, num2);
  // for (let i = 0; i <= maxValue; i++) {
  //   let binaryNum1 = i
  //     .toString(2)
  //     .split("")
  //     .filter((item) => item === "1").length;
  //   // console.log("i", i);

  //   if (binaryNum1 === binaryNum2) {
  //     console.log("i", i);
  //     const result = num1 ^ i;
  //     console.log("Result", result);
  //     console.log("Output", output);
  //     if (result < output) {
  //       output = result;
  //       min = i;
  //     }
  //   }
  // }
  return min;
};

// console.log(minimizeXor(25, 72));
console.log(minimizeXor(65, 84));
// console.log(minimizeXor(1, 12));
// console.log(minimizeXor(3, 5));
let a = 10;
let b = 12;

console.log(3 ^ 5);
console.log(5 ^ 3);
