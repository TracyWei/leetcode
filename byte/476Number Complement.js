// 补数
// var findComplement = function(num) {
//   var mask = 1;
//   var temp = num;
//   while(temp > 0) {
//     // 左移动
//     mask = mask << 1;
//     // 右移动
//     temp = temp >> 1;
//   }
//   return num ^ (mask - 1);
// };
var findComplement = function(num) {
  var result = 0;
  var add = 1;
  while(num) {
    // 最后一位是0的话
    if (!(num&1)) {
      result += add;
    }
    num >>= 1;
    add <<= 1;
  }
  return result;
};