```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  /*** dfs solution ***/
  // if (root === null) return 0
  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))

  /*** bfs solution ***/
  if (root === null) return 0
  let depth = 0
  let queue = [root]
  while (queue.length) {
    let queueLen = queue.length
    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  return depth
}
```
