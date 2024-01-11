### Understanding the execution context 

#### Execution context type 

##### global execution context

Anything that is not inside the function is a global execution context. It first creates a global window object and sets the value of this equal to this global object. There is only one global execution context in a program.

##### function execution context

##### **eval** function execution context  

The code executed in the eval function will have its own execution context, but the eval function is not commonly used and will not be discussed further.


#### Execute context stack

- JavaScript engine uses execution context stack to manage execution context

- When JavaScript executes code, it first encounters global code, creates a global execution context and pushes it onto the execution stack. Whenever it encounters a function call, it creates a new execution context for the function and pushes it onto the top of the stack. The engine will execute the function at the top of the execution context stack. When the function execution is completed, the execution context will be popped from the stack and continue to execute the next context. When all code has been executed, pop the global execution context from the stack

```js
let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
```

#### Create an execution context

there are two phases to create an execution context: **creation phase** and **execution phase**

##### creation phase 

###### this binding
- In the context of global execution, this points to the global object(window object)
- In a function execution context, the value of `this` points to depends on how the function is called. If it is called by a reference object, then `this` will be set to that object, otherwise the value of `this` will be set to the global object or undefined

###### create lexical environment components
- The lexical environment is a data structure with an identifier-variable mapping. The identifier refers to the variable or function name, and the variable is a reference to the actual object or original data.
- Environment recorder: used to store the actual location of the variable and function declaration. Reference to the external environment: can access the parent scope.

###### Create a variable environment component
A variable environment is also a lexical environment, and its environment recorder holds the bindings created by the variable declaration statements in the execution context.


##### execution phase

At this stage, variables are allocated and the code is executed.


#### Summary

In short, the execution context refers

Before executing JS code, the code needs to be parsed. When parsing, a global execution context will be created first, and all variables and function declarations to be executed in the code will be taken out first. Variables are first assigned to undefined, and functions are declared before they can be used. After this step is completed, the formal execution process begins.

Before a function is executed, a function execution context is also created, which is similar to the global execution context. However, the function execution context includes additional elements like `this`, `arguments`, and the `function's parameters`.

- Global Context: variable definition, function declaration 
- Function context: variable definition, function declaration, this, arguments