## Solving the "Same Tree" Problem (LeetCode 100)

The "Same Tree" problem on LeetCode is a classic problem that tests your understanding of binary trees and recursion. Here, we will explore how to determine if two binary trees are identical.

### Problem Description

Given the roots of two binary trees, `p` and `q`, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

**Example:**

```
Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false
```

### Solution: Recursive Approach

The most intuitive way to solve this problem is through recursion. We'll compare the roots of both trees, and if they match, we'll recursively compare their left and right subtrees.

#### Detailed Explanation

1. **Base Case**:
   - If both nodes are `null`, they are identical (return `true`).
   - If one node is `null` and the other is not, they are not identical (return `false`).
   - If the values of both nodes do not match, they are not identical (return `false`).

2. **Recursive Case**:
   - Compare the values of the current nodes.
   - Recursively compare the left children of both nodes.
   - Recursively compare the right children of both nodes.
   - If all comparisons return `true`, the trees are identical.

Here's the implementation of this approach:

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // Base case: both nodes are null
  if (p === null && q === null) {
    return true;
  }
  
  // Base case: one node is null, but the other is not
  if (p === null || q === null) {
    return false;
  }
  
  // Base case: the values of the nodes do not match
  if (p.val !== q.val) {
    return false;
  }
  
  // Recursive case: compare left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Example usage
let p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p, q)); // Output: true
```

### Complexity Analysis

- **Time Complexity:** O(n), where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** O(h), where h is the height of the tree. This space is used by the system call stack due to recursion.

### Conclusion

The recursive approach is a straightforward and efficient way to solve the "Same Tree" problem. By understanding the base and recursive cases, we can determine whether two binary trees are identical in both structure and node values. This problem not only helps in grasping recursion but also strengthens your understanding of binary tree traversal.