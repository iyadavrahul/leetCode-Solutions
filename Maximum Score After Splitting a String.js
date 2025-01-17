var maxScore = function (s) {
  let output = 0;
  let zeroes = 0;
  let ones = s.split("").filter((item) => item == 1).length;

  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] == "1") {
      ones--;
    } else {
      zeroes++;
    }
    output = Math.max(output, ones + zeroes);
  }
  return output;
};
console.log(maxScore("010"));
