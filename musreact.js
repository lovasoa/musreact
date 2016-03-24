// mymodule.js
var parser = require("./grammar/grammar.js");

console.log(parser.parse(process.argv[2]));
