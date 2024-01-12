In JavaScript, the `const` declaration creates a read-only reference to a value. This means that the variable itself cannot be reassigned to a different value. However, for objects and arrays, while the reference to the object or array cannot be changed (i.e., you cannot assign a new object or array to the `const` variable), the properties or elements of the object or array can still be modified.

Here's an example to illustrate this:

```javascript
const obj = { key: "value" };

// You can modify the properties of the object
obj.key = "new value"; // This is allowed

// But you cannot assign a new object to the variable
// obj = { newKey: "newValue" }; // This will throw an error
```

Similarly, with arrays:

```javascript
const arr = [1, 2, 3];

// You can modify the elements of the array
arr[0] = 4; // This is allowed

// But you cannot assign a new array to the variable
// arr = [4, 5, 6]; // This will throw an error
```

In summary, while the `const` declaration prevents reassignment of the variable itself, it does not make the object or array immutable. You can still modify the properties of an object or the elements of an array declared with `const`. If you want to ensure that an object or array is completely immutable, you would need to use other techniques or libraries designed for immutability.