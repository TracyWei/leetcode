var invertTree = function(root) {
  if (!root) {
    return root;
  }
  var temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}