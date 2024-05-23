## Solving the "Path Sum" Problem (LeetCode 112)

The "Path Sum" problem on LeetCode is a common problem that tests your ability to traverse a binary tree and check for a specific condition. Here, we need to determine if the tree has a root-to-leaf path such that adding up all the values along the path equals a given sum.

### Problem Description

Given the root of a binary tree and an integer `targetSum`, write a function to determine if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

**Example:**

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The path is 5 -> 4 -> 11 -> 2 which sums to 22.
```

### Solution 1: Recursive Approach (Preferred Solution)

A preferred way to solve this problem is using a recursive approach. We'll traverse the tree in a depth-first manner, keeping track of the current sum as we go.

#### Detailed Explanation

1. **Base Case**:
   - If the root is `null`, return `false`.

2. **Recursive Function**:
   - Create a helper function `recurse` that takes a node and the current sum as arguments.
   - Add the node's value to the current sum.
   - If the node is a leaf node (both left and right children are `null`), check if the current sum equals `targetSum`.
   - Recursively check the left and right subtrees, returning `true` if either subtree has a path that matches the target sum.

Here’s the implementation of the preferred recursive approach:

```javascript
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const recurse = (node, curSum) => {
    if (!node) return false;
    
    curSum += node.val;
    
    // If it's a leaf node
    if (!node.left && !node.right) {
      return curSum === targetSum;
    }
    
    // Recursively check the left and right subtrees
    return recurse(node.left, curSum) || recurse(node.right, curSum);
  }
  
  return recurse(root, 0);
};

// Example usage
let root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
let targetSum = 22;
console.log(hasPathSum(root, targetSum)); // Output: true
```

**Complexity Analysis:**
- **Time Complexity:** O(n), where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** O(h), where h is the height of the tree. This space is used by the system call stack due to recursion.

### Solution 2: Iterative Approach (Breadth-First Search)

We can also solve this problem using an iterative approach with breadth-first search (BFS). We'll use a queue to traverse the tree level by level and keep track of the current sum for each path.

#### Detailed Explanation

1. Initialize a queue with the root node and the initial sum (root's value).
2. While the queue is not empty:
   - Dequeue the front node and its associated current sum.
   - If the node is a leaf node and the current sum equals `targetSum`, return `true`.
   - If the node has left and/or right children, enqueue them with the updated sum.
3. If the queue is empty and no path has been found, return `false`.

Here’s the implementation of the iterative approach:

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (root === null) {
    return false;
  }

  let queue = [{ node: root, currentSum: root.val }];

  while (queue.length > 0) {
    let { node, currentSum } = queue.shift();

    // If it's a leaf node
    if (node.left === null && node.right === null) {
      if (currentSum === targetSum) {
        return true;
      }
    }

    if (node.left !== null) {
      queue.push({ node: node.left, currentSum: currentSum + node.left.val });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, currentSum: currentSum + node.right.val });
    }
  }

  return false;
};

// Example usage
let root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
let targetSum = 22;
console.log(hasPathSum(root, targetSum)); // Output: true
```

**Complexity Analysis:**
- **Time Complexity:** O(n), where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** O(n), where n is the number of nodes in the tree. This is the space required for the queue in the worst case.

### Conclusion

Both the recursive and iterative approaches effectively solve the "Path Sum" problem. The recursive approach is elegant and straightforward, while the iterative approach using BFS can be more intuitive for those familiar with iterative solutions. Understanding both methods provides a comprehensive grasp of tree traversal techniques.