// for (let i = 0; i < queries.length; i++) {
//   let initial = queries[i][0];
//   let last = queries[i][1];
//   let number = 0;
//   // for (let j = initial; j <= last; j++) {
//   //   let lastIndex = words[j].length - 1;
//   //   if (vowels.includes(words[j][0]) && vowels.includes(words[j][lastIndex]))
//   //     number++;
//   // }
//   // output.push(number);
// }
var vowels = ["a", "e", "i", "o", "u"];
var vowelStrings = function (words, queries) {
  let output = [];
  let indexes = [];
  for (let i = 0; i < words.length; i++) {
    let firstIndex = 0;
    let lastIndex = words[i].length - 1;
    // console.log(words[i][firstIndex], words[i][lastIndex]);
    if (
      vowels.includes(words[i][firstIndex]) &&
      vowels.includes(words[i][lastIndex])
    ) {
      indexes.push(i);
    }
    for (let j = 0; j < queries.length; j++) {
      // if(queries[j][0]>)
      let firstCond = queries[j][0];
      let secondCond = queries[j][queries[j].length - 1];
    }
  }
  console.log(indexes);
  return output;
};

console.log(
  vowelStrings(
    ["aba", "bcb", "ece", "aa", "e"],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
);

// let words = ["a", "e", "i"];
// let queries = [
//   [0, 2],
//   [0, 1],
//   [2, 2],
// ];
// console.log(vowelStrings("Call 2", words, queries));
