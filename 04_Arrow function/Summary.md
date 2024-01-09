If you create a new arrow function in JavaScript, you are essentially defining a concise way to write a function. Here's what you need to know about arrow functions:

1. **Syntax**: Arrow functions have a shorter syntax compared to regular functions.
   - Regular function:
     ```javascript
     function add(a, b) {
       return a + b;
     }
     ```
   - Arrow function:
     ```javascript
     const add = (a, b) => a + b;
     ```

2. **Lexical `this`**: Arrow functions do not have their own `this` context. They inherit the `this` value from the enclosing (function or global) scope. This behavior can be useful in avoiding the traditional function behavior where `this` can be affected by how a function is called.

3. **No `arguments` object**: Arrow functions do not have their own `arguments` object. If you want to access the arguments in an arrow function, you'd have to use the `arguments` of the enclosing function or use the rest parameter syntax.

4. **No `new.target`**: Arrow functions do not have a `new.target` property.

5. **No `prototype`**: Arrow functions do not have a `prototype` property.

6. **Cannot be used as constructors**: Arrow functions cannot be used with the `new` keyword to create instances. Trying to do so will result in a runtime error.

7. **Shorter syntax**: For single-expression functions, arrow functions provide a more concise syntax. However, for more complex functions or methods that require `this`, the traditional function syntax might still be preferable.

Here's an example demonstrating the difference in behavior between a regular function and an arrow function:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`);
};

const john = new Person("John");
john.sayHello(); // Outputs: Hello, John!

const jane = {
  name: "Jane",
  sayHello: () => {
    console.log(`Hello, ${this.name}!`);
  }
};

jane.sayHello(); // Outputs: Hello, undefined!
```

In the example above, the `sayHello` method defined using an arrow function within the `jane` object doesn't work as expected because arrow functions don't have their own `this`.