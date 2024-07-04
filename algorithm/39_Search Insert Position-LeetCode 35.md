## Solving the "Search Insert Position" Problem (LeetCode 35)

The "Search Insert Position" problem is a fundamental algorithmic challenge that requires understanding of array manipulation and binary search techniques.

### Problem Description

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

**Example:**
```
Input: nums = [1, 3, 5, 6], target = 5
Output: 2

Input: nums = [1, 3, 5, 6], target = 2
Output: 1

Input: nums = [1, 3, 5, 6], target = 7
Output: 4

Input: nums = [1, 3, 5, 6], target = 0
Output: 0
```

### Solution Approaches

To solve this problem, we can consider the following approaches:

1. **Linear Search**
2. **Binary Search**

### Solution 1: Linear Search

This approach involves iterating through the array and finding the position where the target should be inserted.

#### Steps:
1. Iterate through the array.
2. If the current element is greater than or equal to the target, return its index.
3. If the loop completes without finding such an element, return the length of the array (target should be inserted at the end).

#### Implementation in JavaScript:

```javascript
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

// Example usage
let nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 5)); // Output: 2
console.log(searchInsert(nums, 2)); // Output: 1
console.log(searchInsert(nums, 7)); // Output: 4
console.log(searchInsert(nums, 0)); // Output: 0
```

#### Time and Space Complexity:
- **Time Complexity:** O(n), where n is the length of the array.
- **Space Complexity:** O(1) since no additional space is used.

### Solution 2: Binary Search

This approach leverages the sorted nature of the array to efficiently find the insert position using binary search.

#### Steps:
1. Initialize two pointers, `left` and `right`, to the start and end of the array.
2. While `left` is less than or equal to `right`:
   - Calculate the middle index `mid`.
   - If the target is found at `mid`, return `mid`.
   - If the target is less than the element at `mid`, move the `right` pointer to `mid - 1`.
   - If the target is greater than the element at `mid`, move the `left` pointer to `mid + 1`.
3. If the target is not found, `left` will be the insert position.

#### Implementation in JavaScript:

```javascript
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

// Example usage
let nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 5)); // Output: 2
console.log(searchInsert(nums, 2)); // Output: 1
console.log(searchInsert(nums, 7)); // Output: 4
console.log(searchInsert(nums, 0)); // Output: 0
```

#### Time and Space Complexity:
- **Time Complexity:** O(log n), where n is the length of the array.
- **Space Complexity:** O(1) since no additional space is used.

### Conclusion

The "Search Insert Position" problem can be effectively solved using both linear and binary search approaches. While the linear search approach is straightforward, the binary search approach leverages the sorted nature of the array to achieve a more efficient O(log n) time complexity, making it more suitable for larger arrays.