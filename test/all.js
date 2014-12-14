var fs = require("fs");
var jison = require("jison");
var React = require("react");

var parser;

exports["test files"] = function(assert){
  var bnf = fs.readFileSync(__dirname+"/../grammar.jison", "utf8");
  var parser = new jison.Parser(bnf);
  var parse = parser.parse.bind(parser);
  var testData = JSON.parse(fs.readFileSync(__dirname+"/tests.json", "utf8"));
  testData.tests.forEach(function(test){
     var elemClass = eval(parse(test.source));
     var element = React.createElement(elemClass, test.data);
     var actual = React.renderToStaticMarkup(element);
     assert.equal(actual, test.expected, test.name);
  });
}

if (module == require.main) require('test').run(exports);
