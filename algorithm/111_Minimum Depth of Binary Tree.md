```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
    if(root === null) return 0;
    if(!root.left) return 1 + minDepth(root.right)
    if(!root.right) return 1 + minDepth(root.left)
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))

 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  /*** bfs solution ***/
  // if(root === null) return 0;
  //  let queue = [root];
  //  let depth = 1;

  //  while(queue.length) {
  //     let node = queue.shift();
  //     if(!node.left && !node.right) {
  //         return depth
  //     }else{
  //         node.left && queue.push(node.left)
  //         node.right && queue.push(node.right)
  //     }
  //     depth++
  //  }
  
  /*** dfs solution1 ***/
  // if(!root) return 0;
  // if(!root.left) return 1+minDepth(root.right)
  // if(!root.right) return 1+minDepth(root.left)
  // return 1+Math.min(minDepth(root.left), minDepth(root.right))
  
  /*** dfs solution2 ***/
  if (root === null) return 0
  const leftDepth = minDepth(root.left)
  const rightDepth = minDepth(root.right)
  if (!root.left && root.right) {
    return rightDepth + 1
  }
  if (root.left && !root.right) {
    return leftDepth + 1
  }
  return Math.min(leftDepth, rightDepth) + 1
}
```
