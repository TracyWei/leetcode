// var singleNumber = function(nums) {
//   var map = {};
//   nums.forEach((item) => {
//     if (map[item] === undefined) {
//       map[item] = 1;
//     } else {
//       map[item] += 1;
//     }
//   });
// };

// 用抑或，n个数的抑或结果就是待求数
var singleNumber = function(nums) {
  var result = 0;
  nums.forEach((item) => {
    result ^= item;
  });
  return result;
};