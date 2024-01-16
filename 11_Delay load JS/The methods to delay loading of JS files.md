### What are the methods to delay the loading of JavaScript files?

Delayed loading is to wait until the page is loaded before loading the JavaScript file. It helps to speed up page loading. 

Generally, there are the following ways to do it: 

#### Add the defer attribute to the js script
The **defer** attribute synchronizes the script loading and Document parsing, and then executes the script file after the document parsing is completed. In this way, the page rendering is not blocked. Multiple scripts with the attribute are executed sequentially according to the specifications, but this may not be the same in some browsers.

#### Add the async attribute to the js script
The **async** attribute will asynchronously load the script and will not block the parsing process of the page. However, when the script is loaded, the js script will be executed immediately. If the document is not parsed, it will also be blocked. The execution sequence of scripts with multiple async attributes is unpredictable and is generally not executed in sequence according to the code sequence. 

#### Dynamically create script tags
To dynamically create DOM tags, one way is to listen to document loading events. After the document is loaded, you can dynamically create script tags to import js scripts. 

#### Use the setTimeout delay method
Set a timer to delay loading js script files

#### Load JS last
Put the js script at the bottom of the document so that the js script can be loaded and executed at the end as much as possible. 