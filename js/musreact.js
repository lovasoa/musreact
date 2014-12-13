/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace(){},
yy: {},
symbols_: {"error":2,"file":3,"component":4,"EOF":5,"uniquetag":6,"tagbegin":7,"tagselfclose":8,"tagend":9,"tagclose":10,"ENDTAG":11,"tagsandtext":12,"tag":13,"loop":14,"tagstart":15,"properties":16,"BEGINLOWERTAG":17,"BEGINCAMELTAG":18,"SELFCLOSE":19,"CLOSECAMELTAG":20,"CLOSELOWERTAG":21,"PROPERTYDECLARATION":22,"string":23,"STRING":24,"variable":25,"tags":26,"innertext":27,"tagsintag":28,"loopstart":29,"loopend":30,"MUSTACHESECTION":31,"MUSTACHEINVERTED":32,"MUSTACHEEND":33,"MUSTACHESIMPLEVAR":34,"MUSTACHECOMPLEXVAR":35,"MUSTACHETHIS":36,"longtext":37,"TEXT":38,"SINGLECHAR":39,"textfragment":40,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"tagend",11:"ENDTAG",17:"BEGINLOWERTAG",18:"BEGINCAMELTAG",19:"SELFCLOSE",20:"CLOSECAMELTAG",21:"CLOSELOWERTAG",22:"PROPERTYDECLARATION",24:"STRING",31:"MUSTACHESECTION",32:"MUSTACHEINVERTED",33:"MUSTACHEEND",34:"MUSTACHESIMPLEVAR",35:"MUSTACHECOMPLEXVAR",36:"MUSTACHETHIS",38:"TEXT",39:"SINGLECHAR"},
productions_: [0,[3,2],[4,1],[6,2],[6,3],[6,4],[13,1],[13,1],[7,2],[7,1],[15,1],[15,1],[8,1],[10,1],[10,1],[16,2],[16,3],[23,1],[23,1],[26,1],[26,2],[12,1],[12,1],[12,2],[12,2],[12,3],[28,1],[28,2],[28,3],[14,3],[29,1],[29,1],[30,1],[25,1],[25,1],[25,1],[37,1],[37,1],[37,2],[37,2],[40,1],[40,2],[40,2],[27,1],[27,1],[27,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
          var contains = function(x){return $$[$0-1].indexOf(x) > -1},
            loopfunc = "function(a){return Array.isArray(a) && a || !!a && [a] || []}",
            negatefunc = "function(a){return (a==null || a.length===0) && [a] || []}";
          return ("React.createClass({\n" +
          (contains("this.loop(") 
              ? "  loop: " + loopfunc + ",\n"
              : "") +
          (contains("this.negate(") 
              ? "  negate: " + negatefunc + ",\n"
              : "") +
          "  render: function(){\n" +
          "    return "+$$[$0-1]+";\n" +
          "  }\n" +
          "});");
        
break;
case 3:this.$ = $$[$0-1]+$$[$0]
break;
case 4:this.$ = $$[$0-2] + $$[$0-1] + $$[$0]
break;
case 5:this.$ = $$[$0-3] + ', ' + $$[$0-1] + $$[$0]
break;
case 8:this.$ = 'React.createElement(' + $$[$0-1] + ', {' + $$[$0] + '}'
break;
case 9:this.$ = 'React.createElement(' + $$[$0] + ', null'
break;
case 10:this.$ = '"'+$$[$0]+'"'
break;
case 11:this.$ = $$[$0]
break;
case 12:this.$ = ')'
break;
case 13:this.$ = ')'
break;
case 14:this.$ = ')'
break;
case 15:this.$ = '"' + $$[$0-1] + '": ' + $$[$0]
break;
case 16:this.$ = ', "' + $$[$0-1] + '": ' + $$[$0]
break;
case 17:this.$ = '"' + yytext + '"'
break;
case 20:this.$ = $$[$0-1]+','+$$[$0]
break;
case 23:this.$ = $$[$0-1] + ', ' + $$[$0]
break;
case 24:this.$ = $$[$0-1] + ', ' + $$[$0]
break;
case 25:this.$ = [$$[$0-2],$$[$0-1],$$[$0]].join(', ')
break;
case 27:this.$ = $$[$0-1]+', '+$$[$0]
break;
case 28:this.$ = [$$[$0-2],$$[$0-1],$$[$0]].join(', ')
break;
case 29:this.$ = $$[$0-2]+$$[$0-1]+$$[$0]
break;
case 30:this.$ = 'this.loop(context.'+yytext+').map(function(context){return '
break;
case 31:this.$ = 'this.negate('+$$[$0]+').map(function(matched){return ';
break;
case 32:this.$ = '})'
break;
case 33:this.$ = 'context.' + yytext
break;
case 34:this.$ = 'context["' + yytext + '"]'
break;
case 35:this.$ = 'context'
break;
case 36:this.$ = $$[$0]
break;
case 37:this.$ = $$[$0]
break;
case 38:this.$ = $$[$0-1]+$$[$0]
break;
case 39:this.$ = $$[$0-1]+$$[$0]
break;
case 41:this.$ ='"'+$$[$0-1]+'"+'+$$[$0]
break;
case 42:this.$ = $$[$0-1]+'+'+$$[$0]
break;
case 43:this.$ = '"' + $$[$0] +'"'
break;
case 44:this.$ = $$[$0]
break;
case 45:this.$ = $$[$0-1] + ' + "' + $$[$0] + '"'
break;
}
},
table: [{3:1,4:2,6:3,7:4,15:5,17:[1,6],18:[1,7]},{1:[3]},{5:[1,8]},{5:[2,2]},{8:9,9:[1,10],11:[1,11],19:[1,12]},{9:[2,9],11:[2,9],16:13,19:[2,9],22:[1,14]},{9:[2,10],11:[2,10],19:[2,10],22:[2,10]},{9:[2,11],11:[2,11],19:[2,11],22:[2,11]},{1:[2,1]},{5:[2,3],17:[2,3],18:[2,3],20:[2,3],21:[2,3],31:[2,3],32:[2,3],33:[2,3],34:[2,3],35:[2,3],36:[2,3],38:[2,3],39:[2,3]},{10:15,20:[1,16],21:[1,17]},{6:27,7:4,12:18,13:23,14:28,15:5,17:[1,6],18:[1,7],25:26,27:19,28:20,29:32,31:[1,33],32:[1,34],34:[1,29],35:[1,30],36:[1,31],37:21,38:[1,24],39:[1,25],40:22},{5:[2,12],17:[2,12],18:[2,12],20:[2,12],21:[2,12],31:[2,12],32:[2,12],33:[2,12],34:[2,12],35:[2,12],36:[2,12],38:[2,12],39:[2,12]},{9:[2,8],11:[2,8],19:[2,8],22:[1,35]},{23:36,24:[1,37],25:38,34:[1,29],35:[1,30],36:[1,31]},{5:[2,4],17:[2,4],18:[2,4],20:[2,4],21:[2,4],31:[2,4],32:[2,4],33:[2,4],34:[2,4],35:[2,4],36:[2,4],38:[2,4],39:[2,4]},{5:[2,13],17:[2,13],18:[2,13],20:[2,13],21:[2,13],31:[2,13],32:[2,13],33:[2,13],34:[2,13],35:[2,13],36:[2,13],38:[2,13],39:[2,13]},{5:[2,14],17:[2,14],18:[2,14],20:[2,14],21:[2,14],31:[2,14],32:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14],38:[2,14],39:[2,14]},{10:39,20:[1,16],21:[1,17]},{6:27,7:4,13:23,14:28,15:5,17:[1,6],18:[1,7],20:[2,21],21:[2,21],28:40,29:32,31:[1,33],32:[1,34]},{6:27,7:4,13:42,14:28,15:5,17:[1,6],18:[1,7],20:[2,22],21:[2,22],25:26,27:41,29:32,31:[1,33],32:[1,34],34:[1,29],35:[1,30],36:[1,31],37:21,38:[1,24],39:[1,25],40:22},{17:[2,43],18:[2,43],20:[2,43],21:[2,43],25:45,31:[2,43],32:[2,43],34:[1,29],35:[1,30],36:[1,31],38:[1,43],39:[1,44]},{17:[2,44],18:[2,44],20:[2,44],21:[2,44],25:47,31:[2,44],32:[2,44],34:[1,29],35:[1,30],36:[1,31],37:46,38:[1,24],39:[1,25]},{17:[2,26],18:[2,26],20:[2,26],21:[2,26],31:[2,26],32:[2,26],34:[2,26],35:[2,26],36:[2,26],38:[2,26],39:[2,26]},{17:[2,36],18:[2,36],20:[2,36],21:[2,36],31:[2,36],32:[2,36],34:[2,36],35:[2,36],36:[2,36],38:[2,36],39:[2,36]},{17:[2,37],18:[2,37],20:[2,37],21:[2,37],31:[2,37],32:[2,37],34:[2,37],35:[2,37],36:[2,37],38:[2,37],39:[2,37]},{17:[2,40],18:[2,40],20:[2,40],21:[2,40],31:[2,40],32:[2,40],34:[2,40],35:[2,40],36:[2,40],38:[2,40],39:[2,40]},{17:[2,6],18:[2,6],20:[2,6],21:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],35:[2,6],36:[2,6],38:[2,6],39:[2,6]},{17:[2,7],18:[2,7],20:[2,7],21:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],35:[2,7],36:[2,7],38:[2,7],39:[2,7]},{9:[2,33],11:[2,33],17:[2,33],18:[2,33],19:[2,33],20:[2,33],21:[2,33],22:[2,33],31:[2,33],32:[2,33],34:[2,33],35:[2,33],36:[2,33],38:[2,33],39:[2,33]},{9:[2,34],11:[2,34],17:[2,34],18:[2,34],19:[2,34],20:[2,34],21:[2,34],22:[2,34],31:[2,34],32:[2,34],34:[2,34],35:[2,34],36:[2,34],38:[2,34],39:[2,34]},{9:[2,35],11:[2,35],17:[2,35],18:[2,35],19:[2,35],20:[2,35],21:[2,35],22:[2,35],31:[2,35],32:[2,35],34:[2,35],35:[2,35],36:[2,35],38:[2,35],39:[2,35]},{6:27,7:4,13:49,14:28,15:5,17:[1,6],18:[1,7],26:48,29:32,31:[1,33],32:[1,34]},{17:[2,30],18:[2,30],31:[2,30],32:[2,30]},{17:[2,31],18:[2,31],31:[2,31],32:[2,31]},{23:50,24:[1,37],25:38,34:[1,29],35:[1,30],36:[1,31]},{9:[2,15],11:[2,15],19:[2,15],22:[2,15]},{9:[2,17],11:[2,17],19:[2,17],22:[2,17]},{9:[2,18],11:[2,18],19:[2,18],22:[2,18]},{5:[2,5],17:[2,5],18:[2,5],20:[2,5],21:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],35:[2,5],36:[2,5],38:[2,5],39:[2,5]},{6:27,7:4,13:42,14:28,15:5,17:[1,6],18:[1,7],20:[2,23],21:[2,23],25:26,27:51,29:32,31:[1,33],32:[1,34],34:[1,29],35:[1,30],36:[1,31],37:21,38:[1,24],39:[1,25],40:22},{6:27,7:4,13:52,14:28,15:5,17:[1,6],18:[1,7],20:[2,24],21:[2,24],29:32,31:[1,33],32:[1,34]},{17:[2,27],18:[2,27],20:[2,27],21:[2,27],31:[2,27],32:[2,27],34:[2,27],35:[2,27],36:[2,27],38:[2,27],39:[2,27]},{17:[2,38],18:[2,38],20:[2,38],21:[2,38],31:[2,38],32:[2,38],34:[2,38],35:[2,38],36:[2,38],38:[2,38],39:[2,38]},{17:[2,39],18:[2,39],20:[2,39],21:[2,39],31:[2,39],32:[2,39],34:[2,39],35:[2,39],36:[2,39],38:[2,39],39:[2,39]},{17:[2,41],18:[2,41],20:[2,41],21:[2,41],31:[2,41],32:[2,41],34:[2,41],35:[2,41],36:[2,41],38:[2,41],39:[2,41]},{17:[2,45],18:[2,45],20:[2,45],21:[2,45],31:[2,45],32:[2,45],38:[1,43],39:[1,44]},{17:[2,42],18:[2,42],20:[2,42],21:[2,42],31:[2,42],32:[2,42],34:[2,42],35:[2,42],36:[2,42],38:[2,42],39:[2,42]},{6:27,7:4,13:54,14:28,15:5,17:[1,6],18:[1,7],29:32,30:53,31:[1,33],32:[1,34],33:[1,55]},{17:[2,19],18:[2,19],31:[2,19],32:[2,19],33:[2,19]},{9:[2,16],11:[2,16],19:[2,16],22:[2,16]},{6:27,7:4,13:52,14:28,15:5,17:[1,6],18:[1,7],20:[2,25],21:[2,25],29:32,31:[1,33],32:[1,34]},{17:[2,28],18:[2,28],20:[2,28],21:[2,28],31:[2,28],32:[2,28],34:[2,28],35:[2,28],36:[2,28],38:[2,28],39:[2,28]},{17:[2,29],18:[2,29],20:[2,29],21:[2,29],31:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],38:[2,29],39:[2,29]},{17:[2,20],18:[2,20],31:[2,20],32:[2,20],33:[2,20]},{17:[2,32],18:[2,32],20:[2,32],21:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32],38:[2,32],39:[2,32]}],
defaultActions: {3:[2,2],8:[2,1]},
parseError: function parseError(str,hash){if(hash.recoverable){this.trace(str)}else{throw new Error(str)}},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str,hash){
"use strict";
if(this.yy.parser){this.yy.parser.parseError(str,hash)}else{throw new Error(str)}},

// resets the lexer, sets new input
setInput:function (input){
"use strict";
this._input=input;this._more=this._backtrack=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0;return this},

// consumes and returns one char from the input
input:function (){
"use strict";
var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1);return ch},

// unshifts one char (or a string) into the input
unput:function (ch){
"use strict";
var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1);this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1){this.yylineno-=lines.length-1}var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]}this.yyleng=this.yytext.length;return this},

// When called from action, caches matched text and appends it on next action
more:function (){
"use strict";
this._more=true;return this},

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function (){
"use strict";
if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},

// retain first n characters of the match
less:function (n){
"use strict";
this.unput(this.match.slice(n))},

// displays already matched input, i.e. for error messages
pastInput:function (){
"use strict";
var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},

// displays upcoming input, i.e. for error messages
upcomingInput:function (){
"use strict";
var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length)}return(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function (){
"use strict";
var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match,indexed_rule){
"use strict";
var token,lines,backup;if(this.options.backtrack_lexer){backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){backup.yylloc.range=this.yylloc.range.slice(0)}}lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno+=lines.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input){this.done=false}if(token){return token}else if(this._backtrack){for(var k in backup){this[k]=backup[k]}return false}return false},

// return next match in input
next:function (){
"use strict";
if(this.done){return this.EOF}if(!this._input){this.done=true}var token,match,tempMatch,index;if(!this._more){this.yytext="";this.match=""}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(this.options.backtrack_lexer){token=this.test_match(tempMatch,rules[i]);if(token!==false){return token}else if(this._backtrack){match=false;continue}else{return false}}else if(!this.options.flex){break}}}if(match){token=this.test_match(match,rules[index]);if(token!==false){return token}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},

// return next match that has a token
lex:function lex(){
"use strict";
var r=this.next();if(r){return r}else{return this.lex()}},

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition){
"use strict";
this.conditionStack.push(condition)},

// pop the previously active lexer condition state off the condition stack
popState:function popState(){
"use strict";
var n=this.conditionStack.length-1;if(n>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules(){
"use strict";
if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions["INITIAL"].rules}},

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n){
"use strict";
n=this.conditionStack.length-1-Math.abs(n||0);if(n>=0){return this.conditionStack[n]}else{return"INITIAL"}},

// alias for begin(condition)
pushState:function pushState(condition){
"use strict";
this.begin(condition)},

// return the number of states currently on the stack
stateStackSize:function stateStackSize(){
"use strict";
return this.conditionStack.length},
options: {},
performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 21;
break;
case 1:return 20;
break;
case 2:yy_.yytext = yy_.yytext.substr(1); this.begin('intag'); return 17;
break;
case 3:yy_.yytext = yy_.yytext.substr(1); this.begin('intag'); return 18;
break;
case 4:this.popState(); return 19;
break;
case 5:this.popState(); return 11;
break;
case 6:yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1); return 22;
break;
case 7:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 24;
break;
case 8:/*ignore whitespaces in tags*/
break;
case 9:yy_.yytext = yy_.yytext.substr(3, yy_.yyleng-5).trim(); return 31;
break;
case 10:yy_.yytext = yy_.yytext.substr(3, yy_.yyleng-5).trim(); return 33;
break;
case 11:yy_.yytext = yy_.yytext.substr(2, yy_.yyleng-4).trim(); return 36;
break;
case 12:yy_.yytext = yy_.yytext.substr(2, yy_.yyleng-4).trim(); return 34;
break;
case 13:yy_.yytext = yy_.yytext.substr(2, yy_.yyleng-4).trim(); return 35;
break;
case 14:return 38;
break;
case 15:return 5;
break;
case 16:return 39;
break;
}
},
rules: [/^(?:<\/([a-z]+[0-9]*)>)/,/^(?:<\/([A-Z][a-zA-Z]*[0-9]*)>)/,/^(?:<([a-z]+[0-9]*))/,/^(?:<([A-Z][a-zA-Z]*[0-9]*))/,/^(?:\/>)/,/^(?:>)/,/^(?:([a-z]+[0-9]*)=)/,/^(?:"[^"]*")/,/^(?:\s+)/,/^(?:\{\{#\s*[a-z]*\s*\}\})/,/^(?:\{\{\/\s*[a-z]*\s*\}\})/,/^(?:\{\{\s*\.\s*\}\})/,/^(?:\{\{\s*[a-zA-Z][a-zA-Z0-9_]+\s*\}\})/,/^(?:\{\{\s*([\w \/\-.]+)\s*\}\})/,/^(?:[^<>{}]+)/,/^(?:$)/,/^(?:.)/],
conditions: {"intag":{"rules":[4,5,6,7,8],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,9,10,11,12,13,14,15,16],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args){if(!args[1]){console.log("Usage: "+args[0]+" FILE");process.exit(1)}var source=require("fs").readFileSync(require("path").normalize(args[1]),"utf8");return exports.parser.parse(source)};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}