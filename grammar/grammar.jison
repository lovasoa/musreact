/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
'</'                  return '</';
'<'                   return '<';
'/>'                  return '/>';
'>'                   return '>';
'='                   return '=';
'{{#'                 return '{{#';
'{{/'                 return '{{/';
'{{'                  return '{{';
'}}'                  return '}}';
\"[^"]*\"             return 'quotedstring';
[A-Z][a-zA-Z]*[0-9]*  return 'camelcaseword';
[a-z]+                return 'lowercaseword';
\w[\w\s]*[\w]|\w      return 'longtext';
<<EOF>>               return 'EOF';
.                     return 'INVALID';
/lex

%start file

%% /* language grammar */

file
    : component EOF
        {return $1;}
    ;

component
 : tag
 ;

tag
 : tagbegin tagselfclose {$$ = $1+$2}
 | tagbegin tagend tagclose {$$ = $1 + $2 + $3}
 | tagbegin tagend tags tagclose {$$ = $1 + $2 + ',' + $3 + $4}
 | tagbegin tagend innertext tagclose {$$ = $1+$2+', '+$3+$4}
 ;

tagbegin
 : '<' element properties 
     {$$ = 'React.createElement(' + $2 + ', {' + $3 + '}'}
 | '<' element 
     {$$ = 'React.createElement(' + $2 + ', null'}
 ;

tagend
 : '>'
   {$$ = ''}
 ;

tagselfclose
 : '/>'
   {$$ = ')'}
 ;

tagclose
 : '</' element '>'
   {$$ = ')'}
 ;

properties
 : property {$$ = $1}
 | properties property {$$ = $1 + ', ' + $2}
 ;

property
 : rawword '=' string
   {$$ = $1 + ':' + $3}
 ;

string
 : 'quotedstring' {$$ = yytext}
 | variable {$$ = $1}
 ;

rawword
 : 'lowercaseword' {$$ = yytext}
 | 'camelcaseword' {$$ = yytext}
 ;


tags
 : tag {$$ = $1}
 | tags tag {$$ = $1 + ', ' + $2}
 | loopstart tags loopend {$$ = $1+$2+$3}
 ;

loopstart
 : '{{#' lowercaseword '}}'
    {var i = 'context.' + $2;
    $$ = '(Array.isArray('+i+') && '+i+' || !!'+i+' && ['+i+'] || []).map(function(context){return '}
 ;

loopend
 : '{{/' lowercaseword '}}'
   {$$ = '})'}
 ;

variable
 : '{{' lowercaseword '}}'
   {$$ = 'context.' + $2}
 ;

element
 : 'lowercaseword'
   // element names that are in lowercase are HTML elements and need to be quoted
   {$$ = '"' + yytext + '"'}
 | 'camelcaseword'
   {$$ = yytext}
 ;

rawwords
 : rawword {$$ = $1}
 | rawwords rawword {$$ = $1 + ' ' + $2}
 ;

textfragment
 : longtext {$$ = '"'+$1+'"'}
 | rawwords {$$ = '"'+$1+'"'}
 | variable {$$ = $1}
 ;

innertext
 : textfragment {$$ = $1}
 | innertext textfragment {$$ = $1 + ' + ' + $2}
 ;
