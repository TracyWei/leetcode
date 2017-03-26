// ^
// var findTheDifference = function(s, t) {
//   var result = 0;
//   for (var i = 0; i < s.length; i += 1) {
//     result ^= s.charCodeAt(i);
//   }
//   for (var j = 0; j < t.length; j += 1) {
//     result ^= t.charCodeAt(j);
//   }
//   return String.fromCharCode(result);
// };

// -
// var findTheDifference = function(s, t) {
//   var result = 0;
//   for (var j = 0; j < t.length; j += 1) {
//     result += t.charCodeAt(j);
//   }
//   for (var i = 0; i < s.length; i += 1) {
//     result -= s.charCodeAt(i);
//   }
//   return String.fromCharCode(result);
// };

// sort
var findTheDifference = function(s, t) {
  s = s.split('').sort();
  t = t.split('').sort();

  for (var i = 0, len = t.length; i < len; i++) {
    if (s[i] !== t[i])
      return t[i];
  }
};

// map
var findTheDifference = function(s, t) {
  var map = {};
  for (var i = 0; i < s.length; i += 1) {
    var curr = s.charAt(i);
    if (!map[curr]) {
      map[curr] = 0;
    }
    map[curr] += 1;
  }
  for (var j = 0; j < t.length; j += 1) {
    var curr = t.charAt(j);
    if (map[curr] === undefined) {
      return curr;
    }
    map[curr] -= 1;
    if (map[curr] < 0) {
      return curr;
    }
  }
};