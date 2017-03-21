var findWords = function(words) {
  var l1 = 'qQwWeErRtTyYuUiIoOpP';
  var l2 = 'aAsSdDfFgGhHjJkKlL';
  var l3 = 'zZxXcCvVbBnNmM';
  var result = [];
  var lines = [l1, l2, l3];
  words.forEach((word) => {
    lines.forEach((line) => {
      var count = 0;
      while (count < word.length && line.indexOf(word.charAt(count)) !== -1) {
        count += 1;
      }
      if (count === word.length) {
        result.push(word);
      }
    });
  });
  return result;
};