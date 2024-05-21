## Sliding Window: Best Time to Buy and Sell Stock - LeetCode 121

Today, let's dive into LeetCode problem 121, "Best Time to Buy and Sell Stock." This problem revolves around finding the maximum profit you can achieve from a single transaction of buying and selling a stock. Let's break it down in a simple, easy-to-follow way.

### Problem Description

You are given an array where each element represents the price of a stock on a given day. You need to find the maximum profit you can achieve by buying on one day and selling on another. The goal is to buy low and sell high, and then return the maximum profit.

**Example:**
```
Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
```

### Solution Approach

To solve this problem efficiently, we can use the sliding window technique with two pointers.

#### Steps and Explanation

1. **Initialize Two Pointers:**
   - `left` pointer starts at the beginning (day 1).
   - `right` pointer starts at the next position (day 2).

2. **Iterate through the Array:**
   - Calculate the profit if you buy at `left` and sell at `right`.
   - If the profit is negative or zero, move the `left` pointer to `right` (since buying at `right` is cheaper).
   - If the profit is positive, update the maximum profit.

3. **Update Pointers:**
   - Move the `right` pointer to the next day.
   - Continue this process until the `right` pointer reaches the end of the array.

### Visualization

Let's visualize the process with the example prices = [7, 1, 5, 3, 6, 4]:

- Day 1 (Price = 7), Day 2 (Price = 1):
  - Profit = 1 - 7 = -6 (not good, move `left` to day 2)
- Day 2 (Price = 1), Day 3 (Price = 5):
  - Profit = 5 - 1 = 4 (update max profit to 4)
- Day 2 (Price = 1), Day 4 (Price = 3):
  - Profit = 3 - 1 = 2 (max profit remains 4)
- Day 2 (Price = 1), Day 5 (Price = 6):
  - Profit = 6 - 1 = 5 (update max profit to 5)
- Day 2 (Price = 1), Day 6 (Price = 4):
  - Profit = 4 - 1 = 3 (max profit remains 5)

### JavaScript Implementation

Here's how you can implement this solution in JavaScript:

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0; // Buy pointer
  let right = 1; // Sell pointer
  let maxProfit = 0;
  
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  
  return maxProfit;
};

// Example usage
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5
```

### Explanation of the Code

1. **Initialization:**
   - `left` is set to the first day.
   - `right` is set to the second day.
   - `maxProfit` is initialized to 0.

2. **Loop Through Prices:**
   - Check if the price at `left` is less than the price at `right`.
   - If yes, calculate the profit and update `maxProfit` if the new profit is greater.
   - If no, move `left` to `right` (since the price at `right` is lower).
   - Move `right` to the next day.

3. **Return the Maximum Profit:**
   - After iterating through the array, `maxProfit` will hold the maximum profit possible.

### Complexity Analysis

- **Time Complexity:** O(n) - We only traverse the array once with two pointers.
- **Space Complexity:** O(1) - We use a constant amount of extra space.

### Conclusion

The sliding window technique with two pointers provides an efficient solution to the "Best Time to Buy and Sell Stock" problem. By iterating through the prices with careful pointer adjustments, we can find the maximum profit in linear time without additional memory overhead. This method ensures we buy low and sell high, achieving the best possible outcome.