var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) stack.push(s[i]);
    else {
      if (stack[stack.length - 1] === brackets[s[i]]) stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
};
// console.log(isValid("(]"));
console.log(isValid("([}}])"));
