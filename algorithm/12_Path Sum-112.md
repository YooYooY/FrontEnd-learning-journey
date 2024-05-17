```js
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // if (!root) return false
  // let isTrue = false
  // let recurse = (node, totalNum) => {
  //   if (!node) return

  //   totalNum += node.val
  //   if (totalNum === targetSum && !node.left && !node.right) {
  //     isTrue = true
  //     return
  //   }
  //   if (node.left) recurse(node.left, totalNum)
  //   if (node.right) recurse(node.right, totalNum)
  // }
  // recurse(root, 0)
  // return isTrue

  if (!root) return false
  const recurse = (node, curSum) => {
    if (!node) return false
    curSum += node.val
    if (!node.left && !node.right) {
      return curSum === targetSum
    }
    return recurse(node.left, curSum) || recurse(node.right, curSum)
  }
  return recurse(root, 0)
}
```
