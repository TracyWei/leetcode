// var addDigits = function(num) {
//   if (num.toString().length === 1) {
//     return num;
//   }
//   var temp = 0;
//   var str = num.toString();
//   for (let i = 0; i < str.length; i += 1) {
//     temp += +str.charAt(i);
//   }
//   num = temp;
//   return addDigits(num);
// };

// var addDigits = function(num) {
//   if (num < 10) {
//     return num;
//   }
//   var sum = 0;
//   while(num > 0) {
//     sum += num % 10;
//     num = parseInt(num / 10);
//   }
//   num = sum;
//   return addDigits(num);
// };

// var addDigits = function(num) {
//   while(num > 10) {
//     num = parseInt(num / 10) + num % 10;
//   }
//   return num;
// };

var addDigits = function(num) {
  return (num - 1) % 9 + 1;
};