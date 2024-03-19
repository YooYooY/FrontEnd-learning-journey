What does the code snippet to the right output by console.log?
```js
const obj = {
  a: 1,
  b: function() {
    console.log(this.a)
  },
  c() {
    console.log(this.a)
  },
  d: () => {
    console.log(this.a)
  },
  e: (function() {
    return () => {
      console.log(this.a);
    }
  })(),
  f: function() {
    return () => {
      console.log(this.a);
    }
  }
}

console.log(obj.a)
obj.b()
;(obj.b)()
const b = obj.b
b()
obj.b.apply({a: 2})
obj.c()
obj.d()
;(obj.d)()
obj.d.apply({a:2})
obj.e()
;(obj.e)()
obj.e.call({a:2})
obj.f()()
;(obj.f())()
obj.f().call({a:2})
```


Explanation

- obj.a simply points to the property a on obj
- obj.b is a normal function and invoking it will log 1
- (obj.b)() is the same as obj.b()
- When we store the reference of obj.b in a variable, executing it separately loses the reference to obj and instead will point to window hence logging undefined
- Because we are using apply to explicitly bind this to {a: 2} it logs 2
- obj.c is also a normal function, logs 1
- obj.d is an arrow function, hence it will basically borrow the scope from outside obj which is window
- Same as above
- apply will not make any difference for arrow functions and it keeps the original this binding i.e. window
- obj.e is actually an IIFE so this refers to window and it returns an arrow function hence this will take its value from enclosing context i.e. it'll be window. Logs undefined
- Same as above
- Once again, call will not make any difference for arrow functions and it keeps the original this binding i.e. window
- obj.f is similar to e but main difference is that its a normal function so this points to obj inside it. The arrow function inside takes this from enclosing context hence referring to obj
- Same as above
- call will not make any difference for arrow functions and it keeps the original this binding i.e. obj and not {a: 2}. Thus it logs 1

### IIFE and arrow function gets this from outer scope not from object

#### Regular Functions(function() {}):
The value of this inside a regular function is determined by how the function is called. If it's called as a method of an object (e.g., obj.b()), this refers to the object. If the function is called standalone (e.g., b() after const b = obj.b), this refers to the global object in non-strict mode, or undefined in strict mode.


#### Arrow Functions (() => {}):

Arrow functions do not have their own this context. Instead, they inherit this from the parent scope at the time of their definition. In your example (d, e, and the arrow functions inside f), the arrow functions defined at the top level of the script will inherit this from the global scope. Arrow functions ignore the context provided by .call(), .apply(), or .bind() methods. Context of obj:

#### obj

methods b and c are regular functions. When they are called as obj.b() and obj.c(), this refers to obj. The arrow functions d, e, and those inside f are defined in the global scope. Therefore, their this is bound to the global context (which doesn't have an a property, hence undefined is logged).

#### IIFE (Immediately Invoked Function Expression):

In the case of e, the IIFE is executed in the global scope, so the this inside the IIFE (and consequently inside the arrow function it returns) is bound to the global context.

