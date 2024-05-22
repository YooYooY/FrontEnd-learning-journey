## Maximum Subarray (LeetCode 53)

"Maximum Subarray" is a classic problem in computer science, often used to illustrate dynamic programming techniques. Here, we'll explore Kadane's Algorithm to solve this problem and provide a detailed explanation of how it works.

### Problem Description

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

### Solution: Kadane's Algorithm

Kadane's Algorithm is a dynamic programming approach that solves this problem in O(n) time with O(1) space complexity. It works by iterating through the array and calculating the maximum subarray sum ending at each position.

#### Detailed Explanation

1. **Initialization**:
   - `maxCurrent` is used to store the maximum sum of the subarray ending at the current position.
   - `maxGlobal` is used to store the maximum sum found so far across all subarrays.

2. **Iterating through the array**:
   - For each element `nums[i]`, calculate the maximum sum of the subarray ending at that position.
   - Update `maxCurrent` to be the larger of `nums[i]` and `maxCurrent + nums[i]`. This step determines whether to start a new subarray at `nums[i]` or to extend the existing subarray to include `nums[i]`.
   - If `maxCurrent` is greater than `maxGlobal`, update `maxGlobal`.

3. **Return the result**:
   - After iterating through the array, `maxGlobal` contains the sum of the maximum subarray.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  
  return maxGlobal;
};

// Example usage
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6
```

### Complexity Analysis

- **Time Complexity:** O(n), where n is the length of the array.
- **Space Complexity:** O(1), as it only uses a fixed amount of extra space.

### Conclusion

Kadane's Algorithm is an optimal solution for the "Maximum Subarray" problem, providing an O(n) time complexity solution with O(1) space complexity. This makes it highly efficient for large arrays. By understanding the dynamic programming approach behind Kadane's Algorithm, you can effectively tackle similar problems in coding interviews and competitive programming.