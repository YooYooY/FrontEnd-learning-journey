### what is Composition? create a pipe()

what is Composition? It is actually not that difficult to understand, see @dan_abramov 's explanation.

Here you are asked to create a pipe() function, which chains multiple functions together to create a new function.

Suppose we have some simple functions like this:

```js
const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y
```

Your pipe() would be used to generate new functions

```js
pipe([
  times(2),
  times(3)
])  
// x * 2 * 3

pipe([
  times(2),
  plus(3),
  times(4)
]) 
// (x * 2 + 3) * 4

pipe([
  times(2),
  subtract(3),
  divide(4)
]) 
// (x * 2 - 3) / 4
```

#### Implementation

Here's one possible implementation of pipe():


```js
const pipe = (fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
```

- pipe takes an array of functions fns as its argument, and returns a new function that applies each function in fns to the output of the previous function.

- The new function takes one argument x, which is passed as the input to the first function in fns.

- reduce is used to invoke each function in fns in turn. The accumulator acc starts out as x, and is replaced by the return value of each function as it is invoked.

- Finally, the output of the last function is returned as the output of the new function.

Example usage:
```js
const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const twice = pipe([times(2)]); // equivalent to (x) => x * 2
const increment = pipe([plus(1)]); // equivalent to (x) => x + 1
const multiplyAndAdd = pipe([times(2), plus(3)]); // equivalent to (x) => x * 2 + 3
const subtractAndDivide = pipe([subtract(3), divide(4)]); // equivalent to (x) => (x - 3) / 4

console.log(twice(3)); // output: 6
console.log(increment(3)); // output: 4
console.log(multiplyAndAdd(3)); // output: 9
console.log(subtractAndDivide(3)); // output: 0
```