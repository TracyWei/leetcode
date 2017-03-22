// 减去重复边的解法
// var islandPerimeter = function(grid) {
//   var result = 0;
//   for (let i = 0; i < grid.length; i += 1) {
//     for (let j = 0; j < grid[i].length; j += 1) {
//       if (grid[i][j] === 1) {
//         result += 4;
//         if (j !== 0 && grid[i][j - 1] === 1) {
//           result -= 2;
//         }
//         if (i !== 0 && grid[i - 1][j] === 1) {
//           result -= 2;
//         }
//       }
//     }
//   }
//   return result;
// };
// 

// 直接解，计算上下左右四条边
var islandPerimeter = function(grid) {
  var result = 0;
  var m = grid.length;
  var n = grid[0].length;
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] === 1) {
        // top
        if (i === 0 || grid[i - 1][j] === 0) {
          result += 1;
        }
        // left
        if (j === 0 || grid[i][j - 1] === 0) {
          result += 1;
        }
        // bottom
        if (i === m - 1 || grid[i + 1][j] === 0) {
          result += 1;
        }
        // right
        if (j === n- 1 || grid[i][j + 1] === 0) {
          result += 1;
        }
      }
    }
  }
  return result;
};