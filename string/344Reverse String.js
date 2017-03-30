// var reverseString = function(s) {
//   return s.split('').reverse().join('');
// };

var reverseString = function(s) {
  let result = '';
  for (let i = s.length - 1; i >= 0; result += s[i--]) {
  }
  return result;
};

// var reverseString = function(s) {
//   return [...s].reverse().join('');
// };

// 递归超时
// var reverseString = function(s) {
//   return (s === '') ? '' : reverseString(s.substr(1)) + s.charAt(0);
// }