/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   var max = -1;
//   function find(root, depth) {
//     if (!root) {
//       max = Math.max(max, depth);
//       return;
//     }
//     find(root.left, depth + 1);
//     find(root.right, depth + 1);
//   }
//   find(root, 0);
//   return max;
// };

var maxDepth = function(root) {
  return find(root);
};

function find(root) {
  if(!root) {
    return 0;
  }
  var right = 1;
  var left = 1;
  if (root.left) {
    left += find(root.left);
  }
  if (root.right) {
    right += find(root.right);
  }
  return right > left ? right : left;
}