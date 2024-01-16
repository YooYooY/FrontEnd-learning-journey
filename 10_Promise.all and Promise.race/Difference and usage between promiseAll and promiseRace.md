### The difference and usage scenarios between Promise.all and Promise.race

#### Promise.all

The Promise.all method can package multiple Promise instances into a new Promise instance. At the same time, the return values of success and failure are different. The return values of success are an array of results , and returns when it fails the value of the first rejected failure state. 

In Promise.all, an array is passed in, and an array is returned. The values returned by the input promise objects are arranged in the array in order. However, note that the order in which they are executed is not in order unless the iterable objects are empty. 

Note that the order of data in the array of successful results obtained by Promise.all is the same as that received by Promise.all. In this case, when multiple requests are sent and data is obtained and used according to the request order, Promise.all can be used to solve the problem.

#### Promise.race

As the name implies, Promse.race means a race, which means that if any result in Promise.race([p1, p2, p3]) gets faster, the result is returned, regardless of whether the result itself is successful or failed. When you want to do something, how long will it take to stop doing it? You can use this method to solve it:
```js
Promise.race([promise1,timeOutPromise(5000)]).then(res=>{})
```

### What problem does Promise solve?

In my work, I often encounter such A requirement. For example, after I use ajax to send A request A, I get the data after success, and I need to pass the data to the request B; Then I need to write the following code:
```js
let fs = require('fs')
fs.readFile('./a.txt','utf8',function(err,data){
  fs.readFile(data,'utf8',function(err,data){
    fs.readFile(data,'utf8',function(err,data){
      console.log(data)
    })
  })
})
```
The preceding code has the following disadvantages:

- The latter request depends on the data passing down after the previous request is successful, which causes multiple ajax requests to be nested and the code is not intuitive enough. 

- If the first and second requests do not need to pass parameters, the next request needs to be executed after the previous request succeeds. In this case, the code needs to be written as above, resulting in insufficient intuitive code.

Promise after it appears, the code becomes as follow:
```js
let fs = require('fs')
function read(url){
  return new Promise((resolve,reject)=>{
    fs.readFile(url,'utf8',function(error,data){
      error && reject(error)
      resolve(data)
    })
  })
}
read('./a.txt').then(data=>{
  return read(data) 
}).then(data=>{
  return read(data)  
}).then(data=>{
  console.log(data)
})
```

In this way, the code looks much simpler and solves the problem of Hell callback.