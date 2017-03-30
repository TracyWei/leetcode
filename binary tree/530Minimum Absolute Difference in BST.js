// 二叉搜索树中序遍历之后是有序的
var getMinimumDifference = function(root) {
  var result = Number.MAX_VALUE;
  var tree = [];
  function inOrder(root) {
    if (!root) {
      return;
    }
    if (root.left) {
      inOrder(root.left);
    }
    tree.push(root.val);
    if (root.right) {
      inOrder(root.right);
    }
  }
  inOrder(root);
  for (var i = 1; i < tree.length; i += 1) {
    result = Math.min(result, tree[i] - tree[i - 1]);
  }
  return result;
};
