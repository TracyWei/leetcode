var detectCapitalUse = function(word) {
  var reg = /^(([a-z]|[A-Z]){1}[a-z]*|[A-Z]+)$/;
  return reg.test(word);
};