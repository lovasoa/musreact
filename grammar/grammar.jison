/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

camelcaseword         [A-Z][a-zA-Z]*[0-9]*
lowercaseword         [a-z]+[0-9]*

%%
\s+                   /* skip whitespace */
'</'{lowercaseword}'>'          return 'CLOSELOWERTAG';
'</'{camelcaseword}'>'          return 'CLOSECAMELTAG';
'<'{lowercaseword}              yytext = yytext.substr(1); return 'BEGINLOWERTAG';
'<'{camelcaseword}              yytext = yytext.substr(1); return 'BEGINCAMELTAG';
'/>'                            return 'SELFCLOSE';
'>'                             return 'ENDTAG';
{lowercaseword}'='              yytext = yytext.substr(0,yyleng-1); return 'PROPERTYDECLARATION';
'{{#'\s*[a-z]*\s*'}}'           yytext = yytext.substr(3, yyleng-5).trim(); return 'MUSTACHESECTION';
'{{/'\s*[a-z]*\s*'}}'           yytext = yytext.substr(3, yyleng-5).trim(); return 'MUSTACHEEND';
'{{'\s*\.\s*'}}'                yytext = yytext.substr(2, yyleng-4).trim(); return 'MUSTACHETHIS';
'{{'\s*[a-zA-Z][a-zA-Z0-9_]+\s*'}}' yytext = yytext.substr(2, yyleng-4).trim(); return 'MUSTACHESIMPLEVAR';
'{{'\s*([\w /\-.]+)\s*'}}'          yytext = yytext.substr(2, yyleng-4).trim(); return 'MUSTACHECOMPLEXVAR';
\\"[^\"]*\"|\'[^\']*\'        yytext = yytext.substr(1,yyleng-2); return 'STRING';
[^<>{}]+                      return 'TEXT';
<<EOF>>                       return 'EOF';
.                             return 'SINGLECHAR';
/lex

%start file

%% /* language grammar */

file
    : component EOF
        %{
          var contains = function(x){return $1.indexOf(x) > -1},
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
          "    return "+$1+";\n" +
          "  }\n" +
          "});");
        }
    ;

component
 : uniquetag
 ;

uniquetag // a tag that cannot be a list of several tags
 : tagbegin tagselfclose {$$ = $1+$2}
 | tagbegin tagend tagclose {$$ = $1 + $2 + $3}
 | tagbegin ENDTAG tags tagclose {$$ = $1 + ', ' + $3 + $4}
 | tagbegin ENDTAG innertext tagclose {$$ = $1 +', '+$3+$4}
 ;

tag : uniquetag | loop ;

tagbegin
 : tagstart properties 
     {$$ = 'React.createElement(' + $1 + ', {' + $2 + '}'}
 | tagstart
     {$$ = 'React.createElement(' + $1 + ', null'}
 ;

tagstart
 : BEGINLOWERTAG {$$ = '"'+$1+'"'}
 | BEGINCAMELTAG {$$ = $1}
 ;

tagselfclose
 : SELFCLOSE
   {$$ = ')'}
 ;

tagclose
 : CLOSECAMELTAG {$$ = ')'}
 | CLOSELOWERTAG {$$ = ')'}
 ;

properties
 : PROPERTYDECLARATION string {$$ = '"' + $1 + '": ' + $2}
 | properties PROPERTYDECLARATION string {$$ = ', "' + $2 + '": ' + $3}
 ;

string
 : STRING {$$ = '"' + yytext + '"'}
 | variable {$$ = $1}
 ;

tags
 : tag {$$ = $1}
 | tags tag {$$ = $1 + ', ' + $2}
 ;

loop
 : loopstart tags loopend {$$ = $1+$2+$3}
 ;

loopstart
 : MUSTACHESECTION
    {$$ = 'this.loop(context.'+yytext+').map(function(context){return '}
 | MUSTACHEINVERTED
    {$$ = 'this.negate('+$1+').map(function(matched){return ';}
 ;

loopend
 : MUSTACHEEND 
   {$$ = '})'}
 ;

variable
 : MUSTACHESIMPLEVAR
   {$$ = 'context.' + yytext}
 | MUSTACHECOMPLEXVAR
   {$$ = 'context["' + yytext + '"]'}
 | MUSTACHETHIS
   {$$ = 'context'}
 ;

textfragment
 : TEXT {$$ = '"'+$1+'"'}
 | SINGLECHAR = {$$ = '"'+$1+'"'}
 | variable {$$ = $1}
 ;

innertext
 : textfragment {$$ = $1}
 | innertext textfragment {$$ = $1 + ' + ' + $2}
 ;
