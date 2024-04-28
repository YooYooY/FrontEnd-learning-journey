### Implement a general memoization function - memo

https://bigfrontend.dev/problem/implement-general-memoization-function

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