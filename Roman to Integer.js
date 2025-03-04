var romanToInt = function (s) {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let output = 0;
  for (let i = 0; i < s.length; i++) {
    if (values[s[i]] < values[s[i + 1]]) output = output - values[s[i]];
    else output = output + values[s[i]];
  }
  return output;
};

console.log(romanToInt("MCMXCIV"));
