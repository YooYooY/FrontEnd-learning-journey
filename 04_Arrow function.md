### What happens if you create a new arrow function

The arrow function is introduced in ES6, it does not have prototype, nor does it have its own this reference, and it cannot use the arguments parameter. Therefore, it is not possible to use the `new` operator with an arrow function.

The steps to implement the new operator are as follows:

1. Create a new object

2. Assign the constructor function's scope to the new object(in other words, set the object's proto property to point to the constructor function's prototype property)

3. Point to the code in the constructor, and `this` in the constructor points to the object(That is, to add properties and methods to the object)

4. Return a new object

```js
function _new(constructor, ...args) {
  //  constructor function judgement
  if (typeof constructor !== 'function') {
    throw new Error('constructor must be a function')
  }
  // create a new object
  let obj = new Object()
  // Assign the constructor function's scope to the new object
  obj.__proto__ = Object.create(constructor.prototype)
  // Point to the code in the constructor, and this in the counstructor points to the object
  let res = constructor.apply(obj, args)
  let isObject = typeof res === 'object' && res !== null
  let isFunction = typeof res === 'function'
  // return value if it was a Object type otherwise return the new object before create
  return isObject || isFunction ? res : obj
}
```

Therefore, the arrow functions in the above steps cannot be executed.

### The difference between arrow functions and ordinary functions

#### Arrow functions are more concise than ordinary functions

- if there are no arguments, just write an empty parentheses
- if there is only one parameter, you can omit the parentheses for the parameter
- if there are multiple parameters, separate them with commas
- if the return value of the function body is only one sentence, you can omit the braces
- if the function body does not require a return value and only has one sentence, you can prefix the statement with a void keyword. the most common is to call a function:

```javascript
let fn = () => void doesNotReturn()
```

#### Arrow functions do not have their own 'this' keyword

The arrow function doesn't create its own this, so it doesn't have its own this, it just inherits this at the level above its own scope. So the pointer to this in the arrow function was already fixed when it was defined, and it doesn't change after that.

#### This pointer inherited from the arrow function never changes

```javascript
var id = 'GLOBAL'
var obj = {
  id: 'OBJ',
  a: function () {
    console.log(this.id)
  },
  b: () => {
    console.log(this.id)
  },
}
obj.a() // 'OBJ'
obj.b() // 'GLOBAL'
new obj.a() // undefined
new obj.b() // Uncaught TypeError: obj.b is not a constructor
```

Method b of object `obj` is defined using an arrow function, and this in this function alaways points to this in the global execution environment in which it was defined, even if the function is called as a method of object `obj`, this,still points to the Window object.

It is worth nothing that the curly brackets {} used to define objects cannot from a separate execution environment, they still remain in the global execution environment.

#### The methods call(), apply(), bind(), etc. cannot change the reference of 'this' in arrow functions.

```javascript
var id = 'Global'
let fun1 = () => {
  console.log(this.id)
}
fun1() // 'Global'
fun1.call({ id: 'Obj' }) // 'Global'
fun1.apply({ id: 'Obj' }) // 'Global'
fun1.bind({ id: 'Obj' })() // 'Global'
```

#### Arrow functions cannot be used as constructors

The process of constructing a function with 'new' has been explained above. In fact, the second step is to refer the 'this' in the function to the object. However, since arrow functions do not have their own 'this' and the 'this' refers to the outer execution environment, and cannot be changed, they cannot be used as constructors

#### Arrow functions do not have their own arguments

The arrow function does not have its own arguments object. Accessing arguments in an arrow function actually gets the arguments value of its outer function.

#### Arrow functions do not have prototype

#### Arrow functions cannot be used as Generator functions and cannot use the yield keyword
