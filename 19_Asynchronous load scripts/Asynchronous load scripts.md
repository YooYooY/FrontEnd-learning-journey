### What are the differences in asynchronous loading of JS scripts?

In Web applications, the asynchronous loading of JavaScript scripts can be achieved in the following ways:

1. Dynamically create a <script> tag and set its src attribute to the URL of the script to be loaded. You can use the onload or onreadystatechange event to check if the script has finished loading

```js
const script = document.createElement('script');
script.src = 'path/to/script.js';
script.onload = function() {
 // 脚本加载完成后执行的回调函数
};
document.body.appendChild(script);
```

2. Use the XMLHttpRequest object or the Fetch API to send an asynchronous request. After a successful request, parse the response text into JavaScript code, and then use the eval() function or Function() constructor to execute the script.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'path/to/script.js');
xhr.onload = function() {
 const script = document.createElement('script');
 script.textContent = xhr.responseText;
 document.head.appendChild(script);
};
xhr.send();
```


These two methods can be used to implement the asynchronous loading of JavaScript scripts. Compared to synchronous loading, asynchronous loading has the following differences:

1. Asynchronous loading can improve the loading speed and response performance of the page, and avoid the situation that the page is stuck due to JavaScript blocking.

2. Asynchronous loading avoids the blocking caused by loading scripts and allows other resources of the page to load and render faster.

3. Asynchronous loading allows you to flexibly control the loading sequence and the execution time of scripts, and dynamically load and unload scripts based on page requirements, thus improving page maintainability and expansibility.

### Q&A


#### How to load JS script asynchronously

Q1: How can you asynchronously load a JS script using a dynamic `<script>` tag?
A: By creating a `<script>` tag, setting its src to the script URL, and appending it to the document.

Q2: What event handlers can be used to detect if a dynamically created script has loaded?
A: The onload or onreadystatechange event handlers.

#### Load scripts asynchronously using XMLHttpRequest or Fetch API

Q3: How can XMLHttpRequest or Fetch API be used for asynchronous script loading?
A: By sending a request to the script's URL and executing the response text as JavaScript code upon success.

Q4: What method is used to execute the script obtained via XMLHttpRequest or Fetch API?
A: The script text is executed using `eval()` or the `Function()` constructor.

#### The difference between asynchronous and synchronous loading

Q5: What are the advantages of asynchronous script loading compared to synchronous loading in terms of page performance?
A: Asynchronous loading improves page load speed and responsiveness, avoiding page stutter due to script blocking.

Q6: How does asynchronous loading affect the loading of other page resources?
A: It allows other resources of the page to load and render faster by avoiding blocking.

Q7: What flexibility does asynchronous script loading offer in terms of script management?
A: It allows dynamic loading and unloading of scripts as needed, improving page maintainability and expansibility.