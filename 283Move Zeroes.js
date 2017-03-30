// 两个指针，一个记录当前第一个0的位置，另一个遍历数组
// var moveZeroes = function(nums) {
//   var pointer = -1;
//   for (var i = 0; i < nums.length; i += 1) {
//     if (nums[i] === 0) {
//       if (pointer < 0) {
//         pointer = i;
//       } else {
//         continue;
//       }
//     } else {
//       if (pointer >= 0) {
//         [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
//         pointer += 1; 
//       }
//     }
//   }
// };

// 两个指针，i遍历数组，j记录下一个不为0的元素应该在的位置
var moveZeroes = function(nums) {
  for (var i = 0, j = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      if (i !== j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j += 1;
    }
  }
  return nums;
};

// 遇到0就删除，往后补0
// var moveZeroes = function(nums) {
//   for (var i = nums.length; i--; ) {
//     if (!nums[i]) {
//       nums.splice(i, 1);
//       nums.push(0);
//     }
//   }
// };