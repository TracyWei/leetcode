// var findMaxConsecutiveOnes = function(nums) {
//   var str = nums.join('');
//   var arr = str.split('0');
//   var result = 0;
//   arr.forEach((item) => {
//     var length = item.length;
//     if (length > result) {
//       result = length;
//     }
//   })
//   return result;
// };

// 单纯的遍历数组
// var findMaxConsecutiveOnes = function(nums) {
//   var result = 0;
//   var current = 0;
//   nums.forEach((item) => {
//     current = (item === 0) ? 0 : current + 1;
//     result = Math.max(result, current);
//   });
//   return result;
// };

// 因为数组中只有0和1，所以用算数的方法
var findMaxConsecutiveOnes = function(nums) {
  var result = 0;
  var current = 0;
  nums.forEach((item) => {
    current = (item + current) * item;
    result = Math.max(result, current);
  });
  return result;
};