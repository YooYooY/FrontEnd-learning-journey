### Do splice and slice change the original array? How to delete the last element of an array?

splice() and slice() are both methods of JavaScript arrays, but they work differently.

#### splice
The splice() method can add, remove, or replace elements in an array and return the deleted element. It modifies the original array.


#### slice
The slice() method creates a new array with elements from the original array, specified by start and end positions, without changing the original array.

#### summary

Therefore, using the splice() method may change the original array, while the slice() method does not.


=====

To delete the last element of an array, there are several ways:

Use the pop() method to delete and return the last element:
```js
const arr = [1, 2, 3, 4];
const lastElement = arr.pop(); // 返回被删除的元素 4console.log(arr); // [1, 2, 3]
```

Delete the last element of an array using the splice() method:

```js
const arr = [1, 2, 3, 4];
arr.splice(-1, 1); // 从倒数第一个位置开始删除一个元素console.log(arr); // [1, 2, 3]
```

Use the slice() method and the spread operator (...) to create a new array containing all the elements except the last one:
```js
const arr = [1, 2, 3, 4];
const newArr = [...arr.slice(0, -1)];
console.log(newArr); // [1, 2, 3]
```

It should be noted that all the above methods either change the original array or create a new one, without preserving the last element in the original array. If you want to retrieve only the last element, you can use indexing or the array method slice():


### Q&A

#### Different between splice and slice

Q1: Does the 'splice()' method change the original array?
A: Yes, 'splice()' modifies the original array by adding, removing, or replacing elements.

Q2: Does the 'slice()' method change the original array?
A: No, 'slice()' creates a new array without changing the original array.


#### To delete the last element of an array

Q3: How does the 'pop()' method delete the last element of an array?
A: 'pop()' removes and returns the last element of the array, changing the original array.

Q4: Can you use 'splice()' to delete the last element of an array?
A: Yes, using arr.splice(-1, 1) removes the last element from the array.

Q5: How can you create a new array without the last element using 'slice()' and the spread operator?
A: By using [...arr.slice(0, -1)], which creates a new array containing all elements except the last.

Q6: Do these methods of removing the last element maintain the original array?
A: No, except for 'slice()', all other methods change the original array or create a new one without the last element.

