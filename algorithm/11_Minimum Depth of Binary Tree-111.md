## Solving the "Minimum Depth of Binary Tree" Problem (LeetCode 111)

The "Minimum Depth of Binary Tree" problem on LeetCode is another fundamental problem that helps in understanding tree traversal and recursion. Here, we will explore how to determine the minimum depth of a binary tree using both recursive and iterative approaches.

### Problem Description

Given the root of a binary tree, write a function to determine its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Example:**

```
Input: root = [3,9,20,null,null,15,7]
Output: 2
```

### Solution 1: Recursive Approach (Depth-First Search)

The recursive approach involves traversing the tree in a depth-first manner and computing the minimum depth by exploring all paths from the root to the leaves.

#### Detailed Explanation

1. **Base Case**:

   - If the root is `null`, the depth is 0.

2. **Recursive Case**:
   - If one of the child nodes is `null`, the minimum depth is determined by the depth of the non-null child node.
   - If both child nodes are non-null, the minimum depth at the current node is the minimum of the depths of the left and right subtrees, plus one (for the current node).

Here's the implementation of the recursive approach:

```javascript
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
var minDepth = function (root) {
  if (root === null) {
    return 0
  }

  if (root.left === null && root.right === null) {
    return 1
  }

  if (root.left === null) {
    return minDepth(root.right) + 1
  }

  if (root.right === null) {
    return minDepth(root.left) + 1
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

// Example usage
let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(minDepth(root)) // Output: 2
```

**Complexity Analysis:**

- **Time Complexity:** O(n), where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** O(h), where h is the height of the tree. This space is used by the system call stack due to recursion.

### Solution 2: Iterative Approach (Breadth-First Search)

An iterative approach using breadth-first search (BFS) can also solve this problem effectively. We'll use a queue to traverse the tree level by level and return the depth as soon as we encounter the first leaf node.

#### Detailed Explanation

1. Initialize a queue with the root node and the initial depth of 1.
2. While the queue is not empty:
   - Dequeue the front node and its associated depth.
   - If the node is a leaf node (both left and right children are `null`), return the current depth.
   - If the node has left and/or right children, enqueue them with the updated depth.
3. The depth at the first encountered leaf node is the minimum depth of the tree.

Here's the implementation of the iterative approach:

```javascript
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
var minDepth = function (root) {
  if (root === null) return 0
  let queue = [root]
  let depth = 1

  while (queue.length) {
    let node = queue.shift()
    if (!node.left && !node.right) {
      return depth
    } else {
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    depth++
  }

  return 0 // This line will never be reached if the input is a valid tree
}

// Example usage
let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(minDepth(root)) // Output: 2
```

**Complexity Analysis:**

- **Time Complexity:** O(n), where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** O(n), where n is the number of nodes in the tree. This is the space required for the queue in the worst case.

### Conclusion

Both the recursive and iterative approaches effectively solve the "Minimum Depth of Binary Tree" problem. The recursive approach is elegant and easy to understand, while the iterative BFS approach is more efficient in terms of space for very deep trees. Understanding both methods provides a comprehensive grasp of tree traversal techniques.
