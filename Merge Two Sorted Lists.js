var mergeTwoLists = function (list1, list2) {
  let result = [];
  for (const item of list1) {
    if (!result.includes(item)) result.push(item);
  }
  return result;
};
// console.log(mergeTwoLists([], (list2 = [0])));
console.log(mergeTwoLists([1, 2, 4], (list2 = [1, 3, 4])));
