@preprocessor typescript

@builtin "number.ne"
@builtin "whitespace.ne"

Gram -> Record:? (Pattern _):+

Pattern -> 
  PatternElement (_ "," _ PatternElement)

PatternElement -> (Annotation _):? (Subject | Path)

Subject -> "[" _ Attributes _ "]"

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

Labels -> (":" Label):+

Label -> Symbol

Record -> 
    "{" _ "}" _ 
  | "{" _ Property ("," _ Property ):* "}" _ 

Property -> Symbol _ ":" _ Value 

Value -> 
    Null
  | Boolean
  | Symbol
  | NumericLiteral
  | StringLiteral
  | Measurement
  | TaggedStringLiteral
  
Null -> "null"

Boolean -> "true" | "false"

Symbol -> [a-zA-Z_] [0-9a-zA-Z_@]:* | StringLiteral

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
BacktickStringLiteral -> "`"  [^`]:*    "`"  

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
