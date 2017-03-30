// var getSum = function(a, b) {
//   var result = a ^ b;
//   var carry = (a & b) << 1;
//   if (carry !== 0) {
//     return getSum(result, carry);
//   } else {
//     return result;
//   }
// };

var getSum = function(a, b) {
  return (a & b) << 1 === 0 ? a ^ b : getSum(a ^ b, (a & b) << 1);
};