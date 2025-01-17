var minimumLength = function (s) {
  if (s.length < 3) return s.length;
  let myObj = {};
  for (let i = 0; i < s.length; i++) {
    myObj[s[i]] = (myObj[s[i]] || 0) + 1;
  }
  let sum = 0;
  Object.entries(myObj).map((item, i) => {
    if (item[1] % 2 === 0) sum += 2;
    else sum += 1;
  });
  return sum;
};
console.log(minimumLength("abaacbcbb"));
