// if (s.length < k) return false;
// if (s.length === k) return true;
// let chars = [];
// for (let i = 0; i < s.length; i++) {
//   const char = chars.filter((item) => item.char === s[i]);
//   if (char.length) {
//     chars.map((item) => {
//       if (item.char === s[i]) return { char: s[i], count: item.count++ };
//       else return item;
//     });
//   } else {
//     chars.push({ char: s[i], count: 1 });
//   }
// }
// let oddCount = 0;
// chars.map((item) => {
//   if (item.count % 2 != 0) oddCount++;
// });
// return oddCount <= k;
var canConstruct = function (s, k) {
  const charCount = {};
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }
  let oddCount = 0;
  for (const count of Object.values(charCount)) {
    if (count % 2 !== 0) oddCount++;
  }
  return oddCount <= k;
};

console.log(canConstruct("annabelle", 2));
