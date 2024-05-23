## Solving the "Maximum Depth of Binary Tree" Problem (LeetCode 104)

The "Maximum Depth of Binary Tree" problem on LeetCode is a fundamental problem that tests your understanding of tree traversal and recursion. Here, we'll explore how to determine the maximum depth of a binary tree using both recursive and iterative approaches.

### Problem Description

Given the root of a binary tree, write a function to determine its maximum depth. The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example:**

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

### Solution 1: Recursive Approach (Depth-First Search)

The most straightforward way to solve this problem is using recursion. We'll traverse the tree in a depth-first manner and compute the depth by exploring all paths from the root to the leaves.

#### Detailed Explanation

1. **Base Case**:
   - If the root is `null`, the depth is 0.

2. **Recursive Case**:
   - Compute the depth of the left subtree.
   - Compute the depth of the right subtree.
   - The maximum depth at the current node is the maximum of the depths of the left and right subtrees, plus one (for the current node).

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
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

// Example usage
let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth(root)); // Output: 3
```

**Complexity Analysis:**
- **Time Complexity:** O(n), where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** O(h), where h is the height of the tree. This space is used by the system call stack due to recursion.

### Solution 2: Iterative Approach (Breadth-First Search)

Another way to solve this problem is using an iterative approach with a breadth-first search (BFS). We'll use a queue to traverse the tree level by level and count the number of levels.

#### Detailed Explanation

1. Initialize a queue with the root node.
2. Initialize a variable to keep track of the depth.
3. While the queue is not empty:
   - Increment the depth.
   - For each node in the current level, add its children to the queue.
4. The depth at the end of the traversal is the maximum depth of the tree.

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
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  let queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return depth;
};

// Example usage
let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth(root)); // Output: 3
```

**Complexity Analysis:**
- **Time Complexity:** O(n), where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** O(n), where n is the number of nodes in the tree. This is the space required for the queue.

### Conclusion

Both the recursive and iterative approaches effectively solve the "Maximum Depth of Binary Tree" problem. The recursive approach is more intuitive and concise, while the iterative approach using BFS is a good alternative that avoids the potential stack overflow issue in very deep trees. Understanding both methods provides a comprehensive grasp of tree traversal techniques.