### 98. Validate Binary Search Tree

https://leetcode.com/problems/validate-binary-search-tree/description

https://www.youtube.com/watch?v=s6ATEkipzow

This article explains the implementation of "the validity of a binary search tree" 

The definition of a binary search tree is that the values of all nodes on the left subtree of each node are less than the value of the node, and the values of all nodes on the right subtree are greater than the value of the node.

The simple brute force solution requires O(n) comparisons for each subtree, and the total time complexity is O(n^2).

The optimized solution reduces the time complexity to O(n) by recursively checking whether each node satisfies the properties of a binary search tree.

When checking recursively, we need to pass the left and right boundaries of the current node to ensure that the value of each node is within the legal range.

If a node does not satisfy the properties of a binary search tree, the algorithm will return false, indicating that the input binary tree is illegal.

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true;
    const valid = (node, left, right)=>{
        if(!node) return true;
        if(node.val<=left || node.val>=right) return false;
        return valid(node.left, left, node.val) && valid(node.right, node.val, right);
    }
    return valid(root, -Infinity, Infinity)
};
```