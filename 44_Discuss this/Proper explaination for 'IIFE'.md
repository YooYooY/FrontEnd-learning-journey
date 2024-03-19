### Proper explaination for 'IIFE'

e: (function() { return () => { console.log(this.a); } })(),

why obj.e() console logs 'undefined'?

In JavaScript, the value of this is determined by how a function is invoked, not where the function is defined.

When an IIFE (Immediately Invoked Function Expression) is executed, it is not called as a method of an object, but as a standalone function.

In non-strict mode, if a function is called as a standalone function (not as a method, constructor, event handler, or via call/apply), this inside that function refers to the global object (window in a browser environment, global in Node.js).

In strict mode ('use strict';), this inside a function that is called as a standalone function is undefined.

So, when an IIFE is invoked, this inside the IIFE is either the global object (in non-strict mode) or undefined (in strict mode), not the object that contains the IIFE (if there is one).

This behavior is not unique to IIFEs; it's how this works in JavaScript in general. It's just that with IIFEs, it can be especially confusing, because you might expect this inside an IIFE to refer to an enclosing object or the surrounding scope, but it doesn't -- it follows the same rules as this inside any other function.
