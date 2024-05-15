### 20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/description/
This article describes how to solve LeetCode question 20 "valid brackets" problem.

We can use the stack data structure to determine whether a string contains a valid bracket combination.

By looping through the string, pushing open brackets onto the stack, and checking whether the current bracket matches the bracket on the top of the stack, we can determine whether the string is valid. 

There also various boundary situations in detail, such as all open brackets or all closed brackets, and provides corresponding solutions.

### key point

- Use the stack data structure to determine the validity of parentheses
- Traverse the string, pushing open parentheses onto the stack
- Checks whether the current bracket matches the bracket at the top of the stack
- Handle edge cases such as all open brackets or all closed brackets
- The time complexity is O(n) and the space complexity is O(n)

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        const char = s[i];
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char)
        }else{
            const preVal = stack.pop();
            if(preVal === "(" && char !== ")") return false;
            if(preVal === "{" && char !== "}") return false
            if(preVal === "[" && char !== "]") return false
            if(preVal === undefined) return false;
        }
    }
    return stack.length ? false : true;
};
```