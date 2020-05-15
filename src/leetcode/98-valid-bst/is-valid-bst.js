/**
 * Definition for a binary tree node.
 */

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   function getValues (node) {
//     const values = [];
//     if (!node) {
//       return values;
//     }

//     if (node.left) {
//       values.push(...getValues(node.left));
//     }
//     values.push(node.val);

//     if (node.right) {
//       values.push(...getValues(node.right));
//     }

//     return values;
//   };
//   const values = getValues(root);
//   for (let i = 0; i < values.length - 1; i++) {
//     if (values[i] >= values[i + 1]) {
//       return false;
//     }
//   }

//   return true;
// };

var isValidBST = function (root) {
  function getValues(node, acc) {
    if (!node) {
      return;
    }

    if (node.left) {
      getValues(node.left, acc);
    }

    acc.push(node.val);

    if (node.right) {
      getValues(node.right, acc);
    }
  }
  const acc = [];
  getValues(root, acc);

  for (let i = 0; i < acc.length - 1; i++) {
    if (acc[i] >= acc[i + 1]) {
      return false;
    }
  }

  return true;
};

export default isValidBST;
