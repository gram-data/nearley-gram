@preprocessor typescript

Gram -> Record:? (Pattern _):+

Pattern -> PatternElement (_ "," _ PatternElement):*

PatternElement -> (Annotation _):* (Subject | Path)

Subject -> "[" _ Attributes _ Association:? "]"

Association -> 
    Membership | Ordering 

Membership -> "|"  _ AssociationMember (_ "," _ AssociationMember):*

Ordering -> "->" _  AssociationMember (_ "," _ AssociationMember):+

AssociationMember -> (PatternElement | Reference)

Reference -> Identity

Path -> 
    Node
  | Relationship

Node -> "(" _ Attributes _ ")"

Relationship -> Node Arrow Path

Annotation -> "@" Symbol "(" Value ")"

Arrow ->
    PlainArrow
  | QualifiedArrow

PlainArrow ->
    "-->"
  | "<--"
  | "<->"
  | "==>"
  | "<=="
  | "<=>"
  | "~~>"
  | "<~~"
  | "<~>"

QualifiedArrow ->
     "-[" Attributes "]->"
  | "<-[" Attributes "]-"
  | "<-[" Attributes "]->"
  |  "=[" Attributes "]=>"
  | "<=[" Attributes "]="
  | "<=[" Attributes "]=>"
  |  "~[" Attributes "]~>"
  | "<~[" Attributes "]~"
  | "<~[" Attributes "]~>"

Attributes -> Identity:? Labels:? Record:?

Identity -> Value

Labels -> (DeclaredLabels | DefinedLabels)

DeclaredLabels -> (Declare Label):+

DefinedLabels -> (Define Label):+

Label -> Symbol

Record -> 
    "{" _ "}" _ 
  | "{" _ Property ("," _ Property ):* "}" _ 

Property -> Symbol _ (Declare | Define ) _ Value

Declare -> "::"

Define -> ":"

Value -> 
    Null
  | Boolean
  | Symbol
  | NumericLiteral
  | StringLiteral
  | Measurement
  | TaggedStringLiteral
  | Range
  
Null -> "null"

Boolean -> "true" | "false"

Symbol -> [a-zA-Z_] [0-9a-zA-Z_@]:* | StringLiteral

Range -> 
    NumericLiteral ".." NumericLiteral
  | NumericLiteral "..."
  | "..." NumericLiteral

NumericLiteral -> 
    Integer
  | Decimal
  | Hexadecimal
  | Octal
  | Percentage

Integer -> ("-"|"+"):? [0-9]:+

Decimal -> "-":? [0-9]:+ ("." [0-9]:+):? ([eE] [+-]:? [0-9]:+):? 

Hexadecimal -> "-":? "0x" [0-9a-fA-F]:+

Octal -> "-":? "0" [0-7]:+

Measurement -> Decimal Symbol

Percentage -> Decimal "%"

StringLiteral ->
    DoubleQuotedLiteral
  | SingleQuotedLiteral
  | BacktickStringLiteral

DoubleQuotedLiteral -> "\"" NonDoubleQuoteChar:* "\"" 
SingleQuotedLiteral -> "'"  NonSingleQuoteChar:* "'"  
BacktickStringLiteral -> "`"  [^`]:*  "`"  

TaggedStringLiteral -> Symbol BacktickStringLiteral

NonDoubleQuoteChar -> 
    [^\\"\n] 
  | "\\" EscapedChars 

NonSingleQuoteChar -> 
    [^\\'\n] 
  | "\\" EscapedChars
  | "\\'"

EscapedChars -> 
    ["\\/bfnrt] 
    | "u" [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9] 

_  -> wschar:* 
__ -> wschar:+ 

wschar -> [ \t\n\v\f] 