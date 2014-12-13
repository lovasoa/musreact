/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

camelcaseword         [A-Z][a-zA-Z]*[0-9]*
lowercaseword         [a-z]+

%%
\s+                   /* skip whitespace */
'</'{lowercaseword}'>'          return 'CLOSELOWERTAG';
'</'{camelcaseword}'>'          return 'CLOSECAMELTAG';
'<'{lowercaseword}              yytext = yytext.substr(1); return 'BEGINLOWERTAG';
'<'{camelcaseword}              yytext = yytext.substr(1); return 'BEGINCAMELTAG';
'/>'                          return 'SELFCLOSE';
'>'                           return 'ENDTAG';
{lowercaseword}'='              yytext = yytext.substr(0,yyleng-1); return 'PROPERTYDECLARATION';
'{{#'\s*[a-z]*\s*'}}'           yytext = yytext.substr(3, yyleng-5).trim(); return 'MUSTACHESECTION';
'{{/'\s*[a-z]*\s*'}}'           yytext = yytext.substr(3, yyleng-5).trim(); return 'MUSTACHEEND';
'{{'\s*\.\s*'}}'                yytext = yytext.substr(2, yyleng-4).trim(); return 'MUSTACHETHIS';
'{{'\s*[a-zA-Z][a-zA-Z0-9_]+\s*'}}' yytext = yytext.substr(2, yyleng-4).trim(); return 'MUSTACHESIMPLEVAR';
'{{'\s*([\w /\-.]+)\s*'}}'            yytext = yytext.substr(2, yyleng-4).trim(); return 'MUSTACHECOMPLEXVAR';
\\"[^\"]*\"|\'[^\']*\'        yytext = yytext.substr(1,yyleng-2); return 'STRING';
\w[\w\s]*[\w]|\w              return 'TEXT';
<<EOF>>                       return 'EOF';
.                             return 'INVALID';
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
 | tagbegin ENDTAG tags tagclose {$$ = $1 + ', ' + $3 + $4}
 | tagbegin ENDTAG innertext tagclose {$$ = $1 +', '+$3+$4}
 ;

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
 | loopstart tags loopend {$$ = $1+$2+$3}
 ;

loopstart
 : MUSTACHESECTION
    {var i = 'context.' + yytext;
    $$ = '(Array.isArray('+i+') && '+i+' || !!'+i+' && ['+i+'] || []).map(function(context){return '}
 | MUSTACHEINVERTED
    {$$ = '(val==null && [val] || val.length===0 && val || [])'.replace(/val/g, 'context.'+yytext)
    $$ += '.map(function(matched){return ';}
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
 | variable {$$ = $1}
 ;

innertext
 : textfragment {$$ = $1}
 | innertext textfragment {$$ = $1 + ' + ' + $2}
 ;
