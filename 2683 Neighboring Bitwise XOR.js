var doesValidArrayExist = function (derived) {
  let original = [];
  for (let i = 0; i < derived.length; i++) {
    if (i === 0) {
      original[0] = 0;
    }
    if (i + 1 === derived.length) break;
    original[i + 1] = original[i] ^ derived[i];
  }
  console.log("Derived", derived);
  console.log("Original", original);
  const value = original[0] ^ original[original.length - 1];
  console.log(value);
  if (value === derived[derived.length - 1]) return true;
  return false;
};

// console.log(doesValidArrayExist([1, 1, 0]));
console.log(doesValidArrayExist([1, 0]));
