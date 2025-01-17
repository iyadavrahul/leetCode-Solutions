//! Brute Force
// var findThePrefixCommonArray = function (A, B) {
//   let output = new Array(A.length).fill(0);
//   for (let i = 0; i < A.length; i++) {
//       if (A[i] === B[i]) output[i]++;
//       const newB = B.slice(0, i);
//       if (newB.includes(A[i])) output[i]++;
//   }
//   for (let j = 0; j < B.length; j++) {
//       if (j === 0) continue;
//       const newB = B.slice(0, j);
//       const newA = A.slice(0, j);
//       if (newA.includes(B[j])) output[j]++;
//       for (let k = 0; k < newA.length; k++) {
//           if (newB.includes(newA[k])) output[j]++;
//       }
//   }
//   return output;
// };

//! Hash Set
var findThePrefixCommonArray = function (A, B) {
  let output = new Array(A.length).fill(0);
  let numbers = new Set(A, B);
  for (let j = 0; j < B.length; j++) {
    if (A[j] === B[j]) output[j]++;
    const newB = B.slice(0, j);
    const newA = A.slice(0, j);
    for (let k = 0; k < j; k++) {
      if (numbers.has(A[k])) output[j]++;
    }
  }
  return output;
};

console.log(findThePrefixCommonArray((A = [2, 3, 1]), (B = [3, 1, 2])));
console.log(findThePrefixCommonArray((A = [1]), (B = [1])));
console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
console.log(findThePrefixCommonArray([1, 2], [1, 2]));
