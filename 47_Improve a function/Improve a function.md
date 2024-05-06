### Improve a function

```js
// Given an input of array, 
// which is made of items with >= 3 properties

let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
] 

// an exclude array made of key value pair
const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'type', v: 'tv'}, 
  ...
] 

function excludeItems(items, excludes) { 
  excludes.forEach( pair => { 
    items = items.filter(item => item[pair.k] === item[pair.v])
  })
 
  return items
} 
```

- What does this function excludeItems do?
- Is this function working as expected ?
- What is the time complexity of this function?
- How would you optimize it ?

#### What does this function excludeItems do?

this function takes in an array of objects `items`, and an array of key-value pairs `excludes`. It then filters out any objects in `items` that have any of the key-value pairs in `excludes`.

#### Is this function working as expected ?

No, this function is not working as expected. The filter condition in the forEach loop is incorrect, as it's comparing the value of `pair.k` to the value of `pair.v` instead of comparing the value of `item[pair.k]` to `pair.v`. Additionally, the function is using `===` instead of `!==` which means it's excluding items that match the exclude criteria instead of excluding items that don't match.

#### What is the time complexity of this function?

The time complexity of this function is `O(n*m)`, where n is the length of `items` and m is the length of `excludes`. For each exclude criteria, the function filters through all items to check if they have the excluded key-value pair.

#### How would you optimize it ?

One way to optimize the function is to use `Array.reduce` instead of `Array.filter` and `Array.forEach`. This way, we can avoid filter chaining and multiple iterations through the items array. We can also use `Array.some` to check the excludes array for each item, and break out of the loop early if any exclude criteria matches. Here's an optimized version of the function:
```js
function excludeItems(items, excludes) {
  return items.reduce((acc, item) => {
    if (!excludes.some(({ k, v }) => item[k] === v)) {
      acc.push(item);
    }
    return acc;
  }, []); 
}
```
This function uses a single iteration through the `items` array, and checks each item against all exclude criteria using `Array.some`. It then pushes the item into the accumulator array `acc` only if none of the exclude criteria match. The time complexity of this new function is O(n*m), which is the best we can do given that we need to check each item against each exclude criteria.