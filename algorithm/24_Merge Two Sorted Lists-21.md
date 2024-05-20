# Solving LeetCode Problem 21: Merge Two Sorted Lists

---

## Introduction

LeetCode problem 21, "Merge Two Sorted Lists," is a common interview question that challenges you to merge two sorted linked lists into a single sorted linked list. This task not only tests your understanding of linked lists but also your ability to manipulate pointers effectively. In this article, we'll break down the problem, outline the thought process behind the solution, and walk through the implementation step-by-step.

---

## Problem Description

### Objective
Given two sorted linked lists, merge them into one sorted linked list. The merged list should be created by splicing together the nodes of the two given lists.

### Example
**Input:**
- List1: 1 -> 2 -> 4
- List2: 1 -> 3 -> 4

**Output:**
- Merged List: 1 -> 1 -> 2 -> 3 -> 4 -> 4

### Constraints
- The number of nodes in both lists is in the range [0, 50].
- Both lists are sorted in non-decreasing order.

---

## Solution Approach

### Step 1: Understanding the Input and Output
We are given two linked lists that are already sorted. Our task is to merge them into a single sorted linked list without creating any new nodes, just by rearranging the existing ones.

### Step 2: Define a Strategy
1. **Initialize a Dummy Node:** We use a dummy node to simplify edge cases, such as when one list is empty. A pointer, `current`, is initialized to this dummy node.
2. **Compare and Merge:** Traverse both lists, comparing the nodes one by one, and append the smaller node to the merged list.
3. **Handle Remaining Nodes:** Once one list is exhausted, append the remaining nodes of the other list to the merged list.
4. **Return the Result:** The merged list starts from the next node of the dummy node.

### Step 3: Implementing the Solution
Here is the Python code to solve the problem:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    # Create a dummy node to act as the head of the merged list
    dummy = ListNode()
    current = dummy
    
    # Traverse both lists and append the smaller node to the merged list
    while list1 and list2:
        if list1.val < list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    
    # If there are remaining nodes in either list, append them
    if list1:
        current.next = list1
    elif list2:
        current.next = list2
    
    # The merged list starts from the next node of the dummy node
    return dummy.next
```

### Step 4: Explanation

1. **Dummy Node and Current Pointer:** We use a dummy node to simplify the handling of edge cases. The `current` pointer helps us keep track of the last node in the merged list.
2. **Comparison Loop:** We iterate through both lists, comparing the values of the nodes. The smaller node is added to the merged list, and we move the pointer of the chosen node to the next node.
3. **Appending Remaining Nodes:** After the loop, one of the lists might still have nodes left. We simply attach the remaining nodes to the end of the merged list.
4. **Return Statement:** Finally, we return the next node of the dummy node, which is the head of the merged list.

### Visual Representation

Here’s a visual representation of the merging process:

- **Initial State:**
  ```
  List1: 1 -> 2 -> 4
  List2: 1 -> 3 -> 4
  Merged List: None
  ```

- **After the first comparison and merge:**
  ```
  List1: 2 -> 4
  List2: 1 -> 3 -> 4
  Merged List: 1
  ```

- **Continuing the process:**
  ```
  List1: 2 -> 4
  List2: 3 -> 4
  Merged List: 1 -> 1
  ```

- **Next:**
  ```
  List1: 4
  List2: 3 -> 4
  Merged List: 1 -> 1 -> 2
  ```

- **And so on until the end:**
  ```
  List1: 4
  List2: 4
  Merged List: 1 -> 1 -> 2 -> 3
  ```
  ```
  List1: None
  List2: 4
  Merged List: 1 -> 1 -> 2 -> 3 -> 4
  ```
  ```
  List1: None
  List2: None
  Merged List: 1 -> 1 -> 2 -> 3 -> 4 -> 4
  ```

### Conclusion

By following the steps outlined in this article, we successfully merged two sorted linked lists into a single sorted linked list. The use of a dummy node simplifies the process and helps manage edge cases effectively. This approach ensures that the merged list maintains the sorted order of the input lists.