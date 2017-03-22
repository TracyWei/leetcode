// 超时
// var findDisappearedNumbers = function(nums) {
//   var result = [];
//   for (let i = 1; i <= nums.length; i += 1) {
//     if (nums.indexOf(i) === -1) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// 正负号标记法
var findDisappearedNumbers = function(nums) {
  var result = [];
  nums.forEach((item) => {
    nums[Math.abs(item) - 1] = -Math.abs(nums[Math.abs(item) - 1]);
  });
  nums.forEach((item, i) => {
    if (item > 0) {
      result.push(i + 1);
    }
  });
  return result;
};