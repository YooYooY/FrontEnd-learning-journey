### Implement a general memoization function - memo

#### Introduce

This article discusses how to implement a general memoized function. 

[Memoization](https://whatthefuck.is/memoization) is a common technique can effectively avoid repeated calculations and improve performance. If you use React, you definitely have used React.memo before.

`Memoization` is also commonly used in algorithm problem, when you have a recursion solution, in most cases, you can improve it by memoization, and then you might be able to get a Dynamic Programming approach.

`memo()` function allow users to pass in a function and generate a new function. This new function will check whether the same parameters have been calculated before, and if so, the cached result will be returned directly, otherwise the new result will be calculated and cached.

```js
const func = (arg1, arg2) => {
  return arg1 + arg2
}

const memoed = memo(func)

memoed(1, 2) 
// 3, func is called

memoed(1, 2) 
// 3 is returned right away without calling func

memoed(1, 3)
// 4, new arguments, so func is called
```

The arguments are arbitrary, so memo should accept an extra resolver parameter, which is used to generate the cache key, like what [_.memoize()](https://lodash.com/docs/4.17.15#memoize) does.

```js
const memoed = memo(func, () => 'samekey')

memoed(1, 2) 
// 3, func is called, 3 is cached with key 'samekey'

memoed(1, 2) 
// 3, since key is the same, 3 is returned without calling func

memoed(1, 3) 
// 3, since key is the same, 3 is returned without calling func
```


#### Main points

- Implementing memoized functions requires a caching mechanism, and you can use the Map data structure to store cached results.

- Users can be allowed to provide a custom cache key generation function (resolver). If not provided, the default parameter-based cache key generation function will be used.

- The new function returned can be an ordinary function or an arrow function, but it should be noted that the arrow function will inherit this from the external scope, while the ordinary function will retain the this context of the caller.

- The logic of cache matching and cache mismatch needs to be processed, including calculating function results, updating cache, etc.

- Also need to deal with the function call context issue to ensure that the results can be cached and read correctly in different call contexts.


#### Solution

```js
/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  // Map<cacheKey, Map<this, result>>
  const cacheMap = new Map();
  return function(...args) {
    const cacheKey = resolver ? resolver(...args) : [...args].join("_");


    if(!cacheMap.has(cacheKey)) {
      console.log("init cache Map")
      cacheMap.set(cacheKey, new Map())
    }

    const thisCache = cacheMap.get(cacheKey)

    if(!thisCache.has(this)) {
      console.log("init this cache Map")
      thisCache.set(this, func.apply(this, args))
    }

    return thisCache.get(this)
  }
}

const testThis = function(a){
    return `${this.val}_${a}`
}

const memoFunc = memo(testThis)

const testSubject = {
    val: 1,
    memo: memoFunc
}

const testSubject2 = {
    val: 2,
    memo: memoFunc
}

// 1_1
console.log(testSubject.memo(1))
// Expected no caching and output is 2_1
console.log(testSubject2.memo(1))
// cache
console.log(testSubject2.memo(1))

```
