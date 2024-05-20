## Understand the "insertion sort" algorithm

Insertion sort is a simple and intuitive sorting algorithm suitable for sorting small amounts of data. It works similar to how we usually organize playing cards, inserting each card one by one into the already sorted section.

### Algorithm principle

The basic idea of insertion sort is to construct an ordered sequence. For unsorted data, scan from back to front in the sorted sequence to find the corresponding position and insert it. Specific steps are as follows:

1. Starting from the first element, the element can be considered to have been sorted.
2. Take out the next element and scan from back to front in the sorted element sequence.
3. If the sorted element is larger than the new element, move the sorted element backward one position.
4. Repeat step 3 until you find a position where the sorted element is less than or equal to the new element.
5. Insert the new element into that position.
6. Repeat steps 2-5 until all elements are sorted.

### Example

Here is an example showing how insertion sort works:

Initial array: \[5, 2, 4, 6, 1, 3\]

- Step 1: The first element 5 has been sorted.
- Step 2: Take out 2, compare it with 5, 2 is less than 5, move 5 backward, and insert 2 into the first position. Result: \[2, 5, 4, 6, 1, 3\]
- Step 3: Take out 4, compare it with 5, 4 is less than 5, move 5 backward, and insert 4 in front of 5. Result: \[2, 4, 5, 6, 1, 3\]
- Step 4: Take out 6 and compare it with 5. 6 is greater than 5 and does not need to be moved. Result: \[2, 4, 5, 6, 1, 3\]
- Step 5: Take out 1, compare it with 6, 5, 4, and 2 in turn, move all elements greater than 1 backward, and insert 1 into the first position. Result: \[1, 2, 4, 5, 6, 3\]
- Step 6: Take out 3, compare it with 6, 5, 4, and 2 in turn, move all elements greater than 3 backward, and insert 3 into the correct position. Result: \[1, 2, 3, 4, 5, 6\]

### JavaScript implementation

The following is the JavaScript code implementation of insertion sort:

```javascript
function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {
     let key = arr[i];
     let j = i - 1;

     // Compare arr[j] with key, if arr[j] is greater than key, move arr[j] backwards
     while (j >= 0 && arr[j] > key) {
       arr[j + 1] = arr[j];
       j = j - 1;
     }
     //Insert the key into the correct position
     arr[j + 1] = key;
   }
   return arr;
}

// Example usage
let array = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 5, 6]
```

### Analysis of Algorithms

1. **Time complexity**:
    - Best case: O(n) (when the input array is already sorted)
    - Worst case: O(n^2) (when the input array is in reverse order)
    - Average case: O(n^2)

2. **Space complexity**: O(1), insertion sort is in-place sorting and does not require additional memory.

3. **Stability**: Insertion sort is a stable sorting algorithm and will not change the relative order of the same elements.

### Applicable scene

Insertion sort is suitable for the following scenarios:
- When the amount of data is small.
- Some data are already in order.

Through insertion sort, we can better understand the basic concepts and operating steps of the sorting algorithm. Although insertion sort is not efficient when dealing with large amounts of data, it is still a simple and effective solution in some specific scenarios.
