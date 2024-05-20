## Understanding the "Two Sum" Problem on LeetCode

The "Two Sum" problem is one of the most popular and classic algorithm problems on LeetCode. It tests your ability to work with arrays and hash maps efficiently.

### Problem Description

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

**Example:**

```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Constraints

- Each input has exactly one solution, and you may not use the same element twice.
- You can return the answer in any order.

### Solution Approach

The key to solving this problem efficiently is to use a hash map (or dictionary in Python) to store the elements of the array along with their indices. This allows for fast lookup times.

### Detailed Steps

1. **Initialize a hash map**: Create an empty hash map to store each number and its index as you iterate through the array.
2. **Iterate through the array**: For each element in the array, calculate the difference between the target and the current element.
3. **Check if the complement exists**: If the difference (complement) exists in the hash map, you have found the two numbers that add up to the target. Return their indices.
4. **Update the hash map**: If the complement does not exist in the hash map, add the current element and its index to the hash map.

### JavaScript Implementation

Here is the JavaScript code to solve the "Two Sum" problem:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numMap = new Map(); // Create a hash map to store numbers and their indices
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Calculate the complement of the current number
    
    if (numMap.has(complement)) { // Check if the complement is already in the hash map
      return [numMap.get(complement), i]; // If found, return the indices
    }
    
    numMap.set(nums[i], i); // Otherwise, add the current number and its index to the hash map
  }
  
  // If no solution is found, return an empty array (as a safeguard, although the problem guarantees a solution)
  return [];
};

// Example usage
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
```

### Explanation of the Code

1. **Initialize the Hash Map**: We start by creating a new `Map` to store the numbers and their indices.
2. **Iterate Through the Array**: We use a `for` loop to go through each element in the array `nums`.
3. **Calculate the Complement**: For each element `nums[i]`, we calculate its complement (`target - nums[i]`).
4. **Check for Complement**: We check if the complement exists in the hash map using the `has` method.
   - If it exists, we return the current index `i` and the index of the complement `numMap.get(complement)`.
5. **Update the Hash Map**: If the complement does not exist, we add the current number and its index to the hash map using the `set` method.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the number of elements in the array. We only iterate through the array once, and each lookup or insertion operation in the hash map takes O(1) time.
- **Space Complexity**: O(n), where n is the number of elements in the array. In the worst case, we might need to store all the elements in the hash map.

### Conclusion

The "Two Sum" problem is a great example to illustrate the efficiency of hash maps for solving problems involving lookups. By using a hash map, we can achieve an optimal time complexity of O(n), making the solution efficient and scalable for large input sizes.