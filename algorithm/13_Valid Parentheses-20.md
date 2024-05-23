### Valid Parentheses (LeetCode 20)

https://leetcode.com/problems/valid-parentheses/description/

The "Valid Parentheses" problem is a common problem that tests your understanding of stack data structures and their application in parsing and evaluating expressions. 

### Problem Description

Given a string containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

**Example 1:**
```
Input: s = "()"
Output: true
```

**Example 2:**
```
Input: s = "()[]{}"
Output: true
```

**Example 3:**
```
Input: s = "(]"
Output: false
```

### Solution Approach

To solve this problem, we can use a stack data structure. The idea is to iterate through the string, pushing each opening bracket onto the stack. For each closing bracket, we check if it matches the top of the stack. If it does, we pop the stack. If it doesn’t, or if the stack is empty when we encounter a closing bracket, the string is not valid.

#### Steps to Implement the Solution:

1. Create a stack to keep track of opening brackets.
2. Use a hash map (dictionary) to store the mapping of closing brackets to their corresponding opening brackets.
3. Iterate through each character in the string:
   - If the character is an opening bracket, push it onto the stack.
   - If it is a closing bracket, check if the stack is not empty and the top of the stack matches the corresponding opening bracket.
     - If it matches, pop the stack.
     - If it doesn’t match or the stack is empty, return `false`.
4. After the iteration, if the stack is empty, return `true` (all opening brackets had matching closing brackets). Otherwise, return `false`.

Here’s the implementation in JavaScript:

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of opening brackets
    let stack = [];
    // Hash map for keeping track of mappings. This provides a fast lookup of matching brackets.
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // For every bracket in the expression
    for (let char of s) {
        // If the character is a closing bracket
        if (char in map) {
            // Pop the topmost element from the stack if it is non-empty, otherwise assign a dummy value
            let topElement = stack.length === 0 ? '#' : stack.pop();
            // The mapping for the opening bracket in our hash map does not match the top element of the stack, return false
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it was an opening bracket, push to the stack.
            stack.push(char);
        }
    }

    // If the stack still contains elements, then it is an invalid expression.
    return stack.length === 0;
};

// Example usage
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
```

### Complexity Analysis

- **Time Complexity:** O(n), where n is the length of the input string. Each character is processed exactly once (pushed and popped from the stack once).
- **Space Complexity:** O(n), where n is the length of the input string. In the worst case, if the string contains only opening brackets, the stack will contain all of them.

### Conclusion

The stack-based solution efficiently determines if the string of brackets is valid by ensuring each opening bracket has a corresponding closing bracket in the correct order. This method is optimal for this problem due to its linear time complexity and straightforward implementation. Understanding this approach is crucial for solving similar problems involving nested structures and balanced parentheses.