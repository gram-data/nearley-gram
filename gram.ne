@preprocessor typescript

Gram -> (Record _):? (Pattern _):*
  {% ([record, patterns]) => `(gram ${record ? record : ""} ${patterns.filter(nonNull).join(",")})` %}

Pattern -> PatternElement (_ "," _ PatternElement):*
  {% ([p1, ps]) => `(pattern ${p1})` %}

PatternElement -> (Annotation _):* (Subject | Path | Reference)
  {% ([anno, el]) => `${anno.filter(nonNull).join("@")}${el}?` %}

Subject -> "[" _ Attributes _ Association:? "]"
  {% () => `(subject)` %}

Association -> "|" (Labels:? Record:? _ "|"):? _ Pattern

Reference -> Identity
  {% () => `(reference)` %}

Path -> 
    Node {% () => `(node)` %}
  | Relationship  {% () => `(relationship)` %}

Node -> "(" _ Attributes _ ")"

Relationship -> Node Arrow Path

Annotation -> Annotate Symbol (("(" Value ")") | ":")

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

Identity -> Key

Labels -> ( (Define | Declare ) Key):+

Record -> 
    "{" _ "}" 
  | "{" _ Property ("," _ Property ):* "}"
  {% (d) => `(record ${(d.length > 2) ? d[2] : ""})` %}

Property -> Key _ ( Define | Declare ) _ Value
  {% ([key, _1, binder, _2, value]) => `(property ${key} ${value})` %}

# What something has
Define -> ":"

# What something might have
Declare -> "::"

# What it means
Annotate -> "@"

Key -> ( Symbol | StringLiteral | Integer)

Value -> 
    Null
  | Boolean
  | Symbol
  | NumericLiteral
  | StringLiteral
  | Measurement
  | TaggedStringLiteral
  | Range
  | Record
  | ValueList

ValueList -> 
    "[" _ "]"
  | "[" _ Value (_ "," _ Value):* _ "]"
  
Null -> "null"

Boolean -> "true" | "false"

Symbol -> [a-zA-Z_] [0-9a-zA-Z_\-@]:* 
{% (d) => `(symbol)` %}

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
  {% (d) => `(integer)` %}

Decimal -> "-":? [0-9]:+ ("." [0-9]:+) ([eE] [+-]:? [0-9]:+):? 
  {% (d) => `(decimal)` %}

Hexadecimal -> "-":? "0x" [0-9a-fA-F]:+

Octal -> "-":? "0" [0-7]:+

Measurement -> NumericLiteral Symbol

Percentage -> NumericLiteral "%"

StringLiteral ->
    DoubleQuotedLiteral
  | SingleQuotedLiteral
  | BacktickStringLiteral
  | FencedStringLiteral

DoubleQuotedLiteral -> "\"" NonDoubleQuoteChar:* "\"" 
SingleQuotedLiteral -> "'"  NonSingleQuoteChar:* "'"  
BacktickStringLiteral -> "`"  NonBacktickChar:*  "`"  
FencedStringLiteral -> "```\n" [\s\S]:+ "\n```"

TaggedStringLiteral -> Symbol BacktickStringLiteral

NonDoubleQuoteChar -> 
    [^\\"\n] 
  | "\\" EscapedChars 

NonSingleQuoteChar -> 
    [^\\'\n] 
  | "\\" EscapedChars
  | "\\'"

NonBacktickChar ->
    [^`\n]
  | "\\" EscapedChars
  | "\\`"

EscapedChars -> 
    ["\\/bfnrt] 
    | "u" [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9] 

_  -> wschar:* 
  {% nothing %}
__ -> wschar:+ 
  {% nothing %}

wschar -> [ \t\n\v\f] 

@{% 
  const nothing = () => null;

  const nonNull = (x) => (x !== null && x !== '')

  const nonNullArray = (d) => {
    let output = [d[2]];

    for (let i in d[3]) {
        output.push(d[3][i][3]);
    }

    return output;
}

%}