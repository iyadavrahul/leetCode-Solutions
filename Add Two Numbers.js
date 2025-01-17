var addTwoNumbers = function (l1, l2) {
  let output = [];
  let carry = 0;
  for (let i = 1; i <= l1.length; i++) {
    let num = l1[l1.length - i] + l2[l1.length - i];
    if (num > 9) {
      output.push(num - 10);
      carry = 1;
    } else {
      output.push(num + carry);
    }
  }
  return output.reverse();
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
