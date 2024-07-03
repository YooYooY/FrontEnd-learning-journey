## Solving the "Move Zeroes" Problem (LeetCode 283)

The "Move Zeroes" problem is a common array manipulation challenge that tests your ability to rearrange elements in an array while maintaining the relative order of non-zero elements.

### Problem Description

Given an integer array `nums`, move all `0`s to the end of it while maintaining the relative order of the non-zero elements.

**Example:**
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

### Solution Approaches

To solve this problem, we can consider multiple approaches:

1. **Two-Pointer Approach**
2. **In-place Replacement**
3. **Optimal Two-Pointer Approach**

### Solution 1: Two-Pointer Approach

This approach uses two pointers to manage the position of non-zero elements and zeroes.

#### Steps:
1. Initialize a pointer `lastNonZeroFoundAt` to keep track of the position of the last non-zero element.
2. Traverse the array. Whenever a non-zero element is found, swap it with the element at `lastNonZeroFoundAt` and increment `lastNonZeroFoundAt`.
3. After the traversal, all non-zero elements are moved to the front, maintaining their relative order, and the zeroes are moved to the end.

#### Implementation in JavaScript:

```javascript
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
};

// Example usage
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
```

#### Time and Space Complexity:
- **Time Complexity:** O(n), where n is the length of the array.
- **Space Complexity:** O(1) since we're modifying the array in-place.

### Solution 2: In-place Replacement

In this approach, we first move all non-zero elements to the front, then fill the remaining positions with zeroes.

#### Steps:
1. Initialize an index `insertPos` to 0.
2. Traverse the array and copy each non-zero element to the position pointed by `insertPos`, then increment `insertPos`.
3. After the traversal, set all remaining positions from `insertPos` to the end of the array to zero.

#### Implementation in JavaScript:

```javascript
var moveZeroes = function(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// Example usage
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
```

#### Time and Space Complexity:
- **Time Complexity:** O(n), where n is the length of the array.
- **Space Complexity:** O(1) since we're modifying the array in-place.

### Solution 3: Optimal Two-Pointer Approach

This approach combines the logic of moving non-zero elements to the front and filling zeroes in a single pass.

#### Steps:
1. Initialize a pointer `lastNonZeroFoundAt` to keep track of the position of the last non-zero element.
2. Traverse the array. Whenever a non-zero element is found, place it at the `lastNonZeroFoundAt` position and increment `lastNonZeroFoundAt`.
3. After placing all non-zero elements, fill the rest of the array with zeroes starting from `lastNonZeroFoundAt`.

#### Implementation in JavaScript:

```javascript
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }

    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// Example usage
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
```

#### Time and Space Complexity:
- **Time Complexity:** O(n), where n is the length of the array.
- **Space Complexity:** O(1) since we're modifying the array in-place.

### Conclusion

The "Move Zeroes" problem can be efficiently solved using various approaches that emphasize in-place modifications to ensure minimal space complexity. The optimal two-pointer approach is particularly effective, achieving O(n) time complexity with O(1) space complexity, making it suitable for large arrays.