### Implement createElement

The syntax extension of `jsx` allows us to easily write html fragments in js code. Let’s take a look at this piece of code:

```js
const title = <h1 className="title">Hello, world!</h1>
```

The above code will be converted by `Babel` into the following code:

```js
const title = createElement('h1', { className: 'title' }, 'Hello, world!')
```

We can figure out how it works by manually implementing the `createElement` method

After `Babel` compilation, the parameters of the createElement method are as follows:

```js
createElement(tag, attrs, child1, child2, child3)
```

- The first parameter is the tag name of the DOM node, its value may be `div`, `h1`, `h1`, etc.
- The second parameter is an object, which contains all attributes, which may include `className`, `id`, etc.
- Starting from the third parameter, it is its child node

The implementation of `createElement` is very simple, just return an object to save its information:

```js
function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  }
}
```


The parameter `...children` of the function uses the rest parameter of ES6. Its function is to merge the following parameters such as child1 and child2 into an array children.

Next is the implementation of the `render` method. Let’s look at this code again:

```js
render(<h1>Hello, world!</h1>, document.getElementById('root'))
```

After compilation, this code becomes this:

```js
render(createElement('h1', null, 'Hello, world!'), document.getElementById('root'))
```

The first parameter of `render` actually accepts the object returned by `createElement`, which is the virtual DOM, and the second parameter is the mounted target DOM.

Additionally, the function of the render method is to render the virtual DOM into a real DOM. The following is its implementation:

```js
function render(vnode, container) {
  // When vnode is a string, the rendering result is a piece of text
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(textNode)
  }

  const dom = document.createElement(vnode.tag)

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key]
      setAttribute(dom, key, value) // Set attributes
    })
  }

  vnode.children.forEach((child) => render(child, dom)) // Recursively render child nodes

  return container.appendChild(dom) // Mount the rendering results to the real DOM
}
```

Setting attributes requires some special circumstances to be considered. We take them out separately as a method setAttribute.

```js
function setAttribute(dom, name, value) {
  // If the attribute name is className, change it back to class
  if (name === 'className') name = 'class'

  // If the property name starts with on, it is an event listening method.
  if (/on\w+/.test(name)) {
    name = name.toLowerCase()
    dom[name] = value || ''
    // If the attribute name is style, update the style object
  } else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || ''
    } else if (value && typeof value === 'object') {
      for (let name in value) {
        // You can set the style through style={width: 20}, and you can omit the unit px
        dom.style[name] = typeof value[name] === 'number' ? value[name] + 'px' : value[name]
      }
    }
    // For ordinary attributes, the attributes are updated directly.
  } else {
    if (name in dom) {
      dom[name] = value || ''
    }
    if (value) {
      dom.setAttribute(name, value)
    } else {
      dom.removeAttribute(name)
    }
  }
}
```
