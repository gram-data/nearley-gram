@preprocessor typescript

@builtin "number.ne"
@builtin "whitespace.ne"

Pattern -> PatternElement ("," PatternElement):*

PatternElement -> (Node | Relationship | Subject)

Node -> "(" Attributes ")"

Relationship -> Node Arrow Path

Arrow -> "-[" Attributes "]->"

Path -> Node | Relationship

Subject -> "[" Attributes "]"
