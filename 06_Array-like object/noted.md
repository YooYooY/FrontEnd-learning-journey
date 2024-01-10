### How to understanding array-like objects and convert them into arrays?

An object with the length attribute and several Index attributes can be called an array-like object. array-like objects are similar to arrays, but array methods cannot be called.
Common array-like object include arguments and DOM methods. Function parameters can also be considered as array-like object because they contain the length attribute value, which represents the number of parameters that can be received

There are several common methods to convert array-like object into arrays: 

#### call the slice method

call the slice method of the array to implement conversion

```js
Array.prototype.slice.call(arrayLike);
```

#### splice method convert

call the splice method of an array to implement conversion
```js
Array.prototype.splice.call(arrayLike, 0);
```

#### concat method convert

use apply to call the concat method of an array to implement conversion
```js
Array.prototype.concat.apply([], arrayLike);
```

####  Array.from Method convert

use the Array.from Method to implement conversion
```js
Array.from(arrayLike);
```
