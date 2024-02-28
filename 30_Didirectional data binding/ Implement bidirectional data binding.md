### Bidirectional concept

**Bidirectional data binding** is essentially a way to connect HTML interface (the UI) with JavaScript code such that a change in the UI updates the data, and a change in the data updates the UI. This creates a "two-way" street where data flows in both directions:

- From the JavaScript to the UI (Data -> UI)
- From the UI back to JavaScript (UI -> Data)

Let's say you have a text box on a web page, and you want its value to be binded to a JavaScript variable. Whenever you change the text in this text box, the JavaScript variable updates. Conversely, if the JavaScript variable changes, the text box shows the new value automatically. That's bidirectional data binding in a nutshell.

### How to implement?

The `Object.defineProperty` function allows you to define properties on JavaScript objects with custom behavior for getting and setting their values.

Here's how to implement bidirectional data binding:

1. **HTML structure**: We'll have an input field where users can type something, and a `<span>` element where we'll display what they typed.

```html
<input type="text" id="textInput" placeholder="Type something...">
<p>What you typed: <span id="textOutput"></span></p>
```

2. **JavaScript logic**: We will:

    1. Grab the input element and span element from the DOM.
    2. Create a JavaScript object (`model`) to represent our data.
    3. Use `Object.defineProperty` to add a property (`text`) to our `model` object with a getter and setter.
    4. Link the DOM elements to our data model such that changes to the input update the model and changes to the model update the input and the `<span>` element.

Let's code this:

```javascript
// Get the input and the span element from the DOM
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

// Define our data model
let model = {};

// Use Object.defineProperty to bind our model's 'text' property
Object.defineProperty(model, 'text', {
  // getter: called when the property is read
  get: function() {
    return textInput.value;
  },
  // setter: called when the property is set
  set: function(newValue) {
    // Update the input value and the span text content
    textInput.value = newValue;
    textOutput.textContent = newValue;
  }
});

// Listen for 'input' events on the text input
textInput.addEventListener('input', function(event) {
  // Set the model's 'text' property, triggering the setter
  model.text = event.target.value;
});
```

Here's what we have done in the JavaScript part:

- We used `document.getElementById` to get references to the DOM elements.
- We declared an empty object `model` that will hold our data.
- We used `Object.defineProperty` to add the `text` property with a custom getter and setter to the `model`.
  - The **getter** simply returns the current value of the input field.
  - The **setter** takes a new value, assigns it to the input field's value (so that the UI stays in sync), and also updates the text content of the `<span>` element to show the new value.
- We added an event listener to the input field that listens for the `input` event (which is triggered whenever the user types or edits the input).
  - Whenever this event occurs, we set the `model.text` property to the current value of the input field. This triggers the set operation, which updates both the data model and the UI elements in sync.