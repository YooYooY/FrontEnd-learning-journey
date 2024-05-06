### why (obj.b)() is the same as obj.b()?

In JavaScript, the this keyword refers to the object it belongs to. In the case of a method (a function associated with an object), this refers to the object the method is called on.

Consider the following example:

```js
let obj = {
  prop: 'Hello',
  method: function() {
    return this.prop;
  }
}

console.log(obj.method());  // Outputs: 'Hello'
```

In the above code, obj.method() outputs 'Hello' because the this inside the method refers to obj, and this.prop is equal to 'Hello'.

```js
let myFunc = obj.method;
console.log(myFunc());  // Outputs: undefined
```

In the above example, myFunc() outputs undefined because this inside the function now refers to the global object (window in a browser), not obj, and there's no global prop variable.

(obj.b)() is the same as obj.b() because in both cases the method is called on obj. The parentheses don't affect how the function is called, they just group the expression - but in this case, the grouping doesn't change anything.