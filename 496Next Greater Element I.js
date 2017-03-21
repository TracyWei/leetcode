// var nextGreaterElement = function(findNums, nums) {
//   var result = [];
//   findNums.forEach((num) => {
//     var index = nums.indexOf(num);
//     if (index !== -1) {
//       var current = 0;
//       for (var i = index + 1; i < nums.length; i += 1) {
//         if (nums[i] > num) {
//           current = nums[i];
//           result.push(current);
//           break;
//         }
//       }
//       if (current === 0) {
//         result.push(-1);
//       }
//     } else {
//       result.push(-1);
//     }
//   });
//   return result;
// };

// 暴力解法O(n*n)
// var nextGreaterElement = function(findNums, nums) {
//   let ans = [];
//   let len = nums.length;

//   findNums.forEach((item) => {
//     let pos = nums.indexOf(item);
//     let hasNextGreaterElement = false;

//     for (let i = pos + 1; i < len; i++) {
//       if (nums[i] > item) {
//         ans.push(nums[i]);
//         hasNextGreaterElement = true;
//         break;
//       }
//     }

//     if (!hasNextGreaterElement)
//       ans.push(-1);
//   });

//   return ans;
// };
// 
// 



// 用stack
var nextGreaterElement = function(findNums, nums) {
  var stack = [];
  var map = {};
  for(var i = nums.length - 1; i >= 0; i -= 1) {
    while(nums[i] > stack[stack.length - 1] && stack.length > 0) {
      stack.pop();
    }
    if (stack.length === 0) {
      map[nums[i]] = -1;
    } else {
      map[nums[i]] = stack[stack.length - 1];
    }
    stack.push(nums[i]);
  }
  return findNums.map((i) => map[i]);
};