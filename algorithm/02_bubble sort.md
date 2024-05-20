## Understanding Bubble Sort: A Fundamental Sorting Algorithm for Frontend Developers

Sorting algorithms are essential tools for developers, helping to organize data efficiently. **Bubble Sort** is one of the simplest sorting algorithms, making it an excellent starting point for understanding sorting concepts. This article will explain how Bubble Sort works and demonstrate its implementation in JavaScript.

### What is Bubble Sort?

Bubble Sort is a comparison-based algorithm that sorts an array by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. This process continues until the array is sorted.

### How Does Bubble Sort Work?

Bubble Sort works by iterating through the array multiple times. During each pass, it compares each pair of adjacent elements and swaps them if they are out of order. This process is repeated until no more swaps are needed, indicating that the array is sorted.

### Steps of Bubble Sort

1. **Initialize**: Start from the first element of the array.
2. **Compare and Swap**: Compare the current element with the next element. If the current element is greater, swap them.
3. **Move to Next Pair**: Proceed to the next pair of elements and repeat the comparison and swap process.
4. **Repeat Passes**: Continue these steps for the entire array. Each pass positions the next largest element correctly.
5. **Check Sorted Array**: If no swaps are made during a pass, the array is sorted, and the algorithm stops.

### Pseudocode for Bubble Sort

```py
for i from 0 to n-1
    for j from 0 to n-i-1
        if array[j] > array[j+1]
            swap array[j] and array[j+1]
```

### Implementation

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}

// Example usage
let sampleArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(sampleArray);
console.log("Sorted array:", sortedArray);
```

### Time Complexity

Bubble Sort has a time complexity of **O(n^2)** in the worst and average cases, where *n* is the number of elements. Each element must be compared to others, resulting in many comparisons and swaps for large arrays.

### Space Complexity

Bubble Sort has a space complexity of **O(1)**, as it is an **in-place** sorting algorithm, requiring only a constant amount of additional memory.

### Advantages and Disadvantages

#### Advantages

1. **Simplicity**: Easy to understand and implement.
2. **In-place Sorting**: Does not require additional memory.
3. **Adaptive**: Can terminate early if the array is already sorted.

#### Disadvantages

1. **Inefficiency**: Not suitable for large datasets due to O(n^2) time complexity.
2. **Not Stable**: May not maintain the relative order of equal elements.
