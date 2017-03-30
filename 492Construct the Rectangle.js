// var constructRectangle = function(area) {
//   var result = [];
//   var gap = -1;
//   for (var i = 1; i <= area; i += 1) {
//     if (area % i === 0) {
//       var L = i > area / i ? i : area / i;
//       var W = area / L;
//       if (gap === -1 || (L - W) < gap) {
//         gap = L - W;
//         result = [L, W];
//       }
//     }
//   }
//   return result;
// };

// 满足相差最小的长和宽的肯定是平方差附近的数
var constructRectangle = function(area) {
  var mid = Math.ceil(Math.sqrt(area));
  // while(mid <= area) {
  //   if (area % mid === 0) {
  //     return [mid, area / mid];
  //   }
  //   mid += 1;
  // }
  for ( ; ; mid++) {
    if (area % mid === 0) {
      return [mid, area / mid];
    }
  }
};