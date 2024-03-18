### Detect data type in JavaScript

It's a BFE.dev JavaScript Coding Question

Here is [link](https://bigfrontend.dev/problem/detect-data-type-in-JavaScript)


1. Firstly, we need to find out the string representing the Object that can be achieved through Object.prototype.toString, basically in JavaScript, each built-in type has its own toString method And for Object It will return like this:

```js
eg: const arr = [1,2,3,4]
Object.prototype.toString.call(arr) // return [object Array]
const str ='hello'
Object.prototype.toString.call(str) // return [object String]
```

2. We need a regex now to bifurcate the return object (/[object (.*)]/g), here I also like to use `slice` method to get the type value:

```js
const rawObject = Object.prototype.toString.call(input).toLowerCase();
// regex method
const typeRegex = /\[object (.*)]/g;
const type = typeRegex.exec(rawObject)[1];
// slice method
const typeStr = rawObject.slice(8, -1)
```

3. Lastly return the exact type which we get it from executing the regex.
```js
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  const objTypeString = Object.prototype.toString.call(data)
  const type = objTypeString.slice(8, -1)
  console.log(type.toLowerCase())
  return type.toLowerCase()
}
```