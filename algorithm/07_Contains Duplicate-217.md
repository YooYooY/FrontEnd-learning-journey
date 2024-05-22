## Multiple Approaches to Solve "Contains Duplicate"

"Contains Duplicate" is a common algorithm problem on LeetCode that tests your understanding of data structures, particularly sets or hash maps. Let's explore several effective methods to solve this problem and analyze their advantages and disadvantages.

### Problem Description

Given an integer array `nums`, determine if the array contains any duplicates. If any value appears at least twice in the array, return `true`. If every element is distinct, return `false`.

**Example:**

```
Input: nums = [1, 2, 3, 1]
Output: true
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

### Solution 1: Using a Set (Efficient Solution)

Using a Set is one of the efficient ways to solve this problem. We can track the elements we encounter with a Set, which allows us to check for duplicates in O(1) time.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let seen = new Set();
  
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  
  return false;
};

// Example usage
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // Output: true
```

### Solution 2: Sorting the Array

Another method is to first sort the array and then check if any adjacent elements are the same. This method has a higher time complexity due to the sorting step.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  
  return false;
};
```

### Solution 3: Using a Hash Map

Using a hash map (or an object in JavaScript) is another way to solve this problem. We can record the occurrence of each element as we iterate through the array. If any element appears more than once, we return `true`.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let countMap = {};
  
  for (let num of nums) {
    if (countMap[num]) {
      return true;
    }
    countMap[num] = true;
  }
  
  return false;
};
```

### Solution 4: Using Array.some and Array.indexOf (Not Optimal)

While using `Array.some` and `Array.indexOf` is very concise, it is not optimal in terms of time complexity. Since `Array.indexOf` itself is an O(n) operation, this approach results in an O(n^2) time complexity, which is inefficient for large arrays.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return nums.some((num, index) => nums.indexOf(num) !== index);
};

// Example usage
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // Output: true
```

### Complexity Analysis

- **Solution 1: Using a Set**
  - Time Complexity: O(n), where n is the number of elements in the array. Each element is checked once, and set operations (insertion and lookup) are on average O(1).
  - Space Complexity: O(n), in the worst case where all elements are unique and need to be stored.

- **Solution 2: Sorting the Array**
  - Time Complexity: O(n log n), mainly due to the sorting step.
  - Space Complexity: O(1), assuming the sorting algorithm is in-place (like quicksort).

- **Solution 3: Using a Hash Map**
  - Time Complexity: O(n), each element is checked once, and hash map operations (insertion and lookup) are on average O(1).
  - Space Complexity: O(n), in the worst case where all elements are unique and need to be stored.

- **Solution 4: Using Array.some and Array.indexOf**
  - Time Complexity: O(n^2), because for each element in the array, `indexOf` needs to traverse the array to find the first occurrence of the element.
  - Space Complexity: O(1), as no additional space is used.

### Conclusion

"Contains Duplicate" is a classic problem for checking duplicate elements, and it can be solved using multiple approaches. Using a Set or Hash Map provides the best time complexity. The sorting approach, while straightforward, has higher time complexity at O(n log n). On the other hand, the method using `Array.some` and `Array.indexOf`, although concise, is not efficient for large arrays due to its O(n^2) time complexity. Choosing the most appropriate method depends on your specific needs and the size of your dataset.