musreact
========

Mustache template to react component compiler

## Demo
http://lovasoa.github.io/musreact/

## How to use

### Directly in html
Compile the mustache template on the client.

```html
<script scr="http://lovasoa.github.io/musreact/js/musreact.js"></script>
<script src="http://facebook.github.io/react/js/react.js"></script>

<!-- The react component will be mounted here -->
<div id="mountpoint"></div>

<script>
var mustacheStr = "<p>Your name is <em>{{name}}</em></p>";
var jsondata    = {name: "Gérard Bouchard"};

var source = parser.parse(mustacheStr);

// Create a react component
var reactComponent = eval(source);

// Use it
React.render(
    React.createElement(reactComponent, jsondata),
    document.getElementById("mountpoint")
);
</script>
```

### Server compiling
Just save the output of `parser.parse(mustacheString)`, and serve it as a normal js file.

An simple script could be:
```js
var fs = require("fs");
var parse = require("musreact").parse;

var jsSource = parse(fs.readFileSync("react-component.mustache", "utf-8"));

fs.writeFileSync("react-component.js", "MyComponent = " + jsSource);
```

It reads the template from `react-component.mustache` and saves the compiled
react component to `react-component.js`. The component will then be accessible through
the global variable `MyComponent`.
