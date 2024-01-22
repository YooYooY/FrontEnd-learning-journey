### How to determine if an object is empty

You can determine whether an object is empty using the following two methods:

Use the `Object.keys()` method to get a list of the object's properties, and then check if the length of the list is 0.

For example:
```js
const obj = {};
if (Object.keys(obj).length === 0) {
 console.log('obj is empty');
}
```

Use a `for...in` loop to traverse the object. If any property exists, then the object is not empty.

For example:
```js
const obj = {};
let isEmpty = true;
for (const prop in obj) {
 isEmpty = false;
 break;
}
if (isEmpty) {
 console.log('obj is empty');
}
```

The effect of both methods is the same, allowing you to choose based on the specific situation.