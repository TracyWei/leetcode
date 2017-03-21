var hammingDistance = function(x, y) {
  var result = (x ^ y).toString(2);
  var count = 0;
  for (let i = 0; i < result.length; i += 1) {
    count += result.charAt(i) === '1' ? 1 : 0
  }
  return count;
};