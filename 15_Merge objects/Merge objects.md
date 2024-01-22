### How to merge objects？

You can use 'Object.assign()' or the spread operator '...' to merge JavaScript objects. Below are two methods for merging objects:

#### Merge objects using 'Object.assign()'

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

#### Merge object Using the spread operator '...'

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

Note that if the merged objects contain properties with the same name, the value of the later property will overwrite the value of the earlier property.