// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: undefined,
  ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "Gram$ebnf$1", "symbols": ["Record"], "postprocess": id},
    {"name": "Gram$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Gram$ebnf$2$subexpression$1", "symbols": ["Pattern", "_"]},
    {"name": "Gram$ebnf$2", "symbols": ["Gram$ebnf$2$subexpression$1"]},
    {"name": "Gram$ebnf$2$subexpression$2", "symbols": ["Pattern", "_"]},
    {"name": "Gram$ebnf$2", "symbols": ["Gram$ebnf$2", "Gram$ebnf$2$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Gram", "symbols": ["Gram$ebnf$1", "Gram$ebnf$2"]},
    {"name": "Pattern$ebnf$1", "symbols": []},
    {"name": "Pattern$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "PatternElement"]},
    {"name": "Pattern$ebnf$1", "symbols": ["Pattern$ebnf$1", "Pattern$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Pattern", "symbols": ["PatternElement", "Pattern$ebnf$1"]},
    {"name": "PatternElement$ebnf$1", "symbols": []},
    {"name": "PatternElement$ebnf$1$subexpression$1", "symbols": ["Annotation", "_"]},
    {"name": "PatternElement$ebnf$1", "symbols": ["PatternElement$ebnf$1", "PatternElement$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PatternElement$subexpression$1", "symbols": ["Subject"]},
    {"name": "PatternElement$subexpression$1", "symbols": ["Path"]},
    {"name": "PatternElement", "symbols": ["PatternElement$ebnf$1", "PatternElement$subexpression$1"]},
    {"name": "Subject$ebnf$1", "symbols": ["Association"], "postprocess": id},
    {"name": "Subject$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Subject", "symbols": [{"literal":"["}, "_", "Attributes", "_", "Subject$ebnf$1", {"literal":"]"}]},
    {"name": "Association", "symbols": ["Membership", "_", "IndividualMembers"]},
    {"name": "Association", "symbols": ["Ordering", "_", "PairedMembers"]},
    {"name": "IndividualMembers$ebnf$1", "symbols": []},
    {"name": "IndividualMembers$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "AssociationMember"]},
    {"name": "IndividualMembers$ebnf$1", "symbols": ["IndividualMembers$ebnf$1", "IndividualMembers$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "IndividualMembers", "symbols": ["AssociationMember", "IndividualMembers$ebnf$1"]},
    {"name": "PairedMembers$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "AssociationMember"]},
    {"name": "PairedMembers$ebnf$1", "symbols": ["PairedMembers$ebnf$1$subexpression$1"]},
    {"name": "PairedMembers$ebnf$1$subexpression$2", "symbols": ["_", {"literal":","}, "_", "AssociationMember"]},
    {"name": "PairedMembers$ebnf$1", "symbols": ["PairedMembers$ebnf$1", "PairedMembers$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PairedMembers", "symbols": ["AssociationMember", "PairedMembers$ebnf$1"]},
    {"name": "AssociationMember$subexpression$1", "symbols": ["PatternElement"]},
    {"name": "AssociationMember$subexpression$1", "symbols": ["Reference"]},
    {"name": "AssociationMember", "symbols": ["AssociationMember$subexpression$1"]},
    {"name": "Reference", "symbols": ["Identity"]},
    {"name": "Membership", "symbols": [{"literal":"|"}]},
    {"name": "Ordering$string$1", "symbols": [{"literal":"-"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "Ordering", "symbols": ["Ordering$string$1"]},
    {"name": "Containment", "symbols": [{"literal":"^"}, "_", "Symbol", "_", {"literal":"^"}]},
    {"name": "Path", "symbols": ["Node"]},
    {"name": "Path", "symbols": ["Relationship"]},
    {"name": "Node", "symbols": [{"literal":"("}, "_", "Attributes", "_", {"literal":")"}]},
    {"name": "Relationship", "symbols": ["Node", "Arrow", "Path"]},
    {"name": "Annotation", "symbols": [{"literal":"@"}, "Symbol", {"literal":"("}, "Value", {"literal":")"}]},
    {"name": "Arrow", "symbols": ["PlainArrow"]},
    {"name": "Arrow", "symbols": ["QualifiedArrow"]},
    {"name": "PlainArrow$string$1", "symbols": [{"literal":"-"}, {"literal":"-"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$1"]},
    {"name": "PlainArrow$string$2", "symbols": [{"literal":"<"}, {"literal":"-"}, {"literal":"-"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$2"]},
    {"name": "PlainArrow$string$3", "symbols": [{"literal":"<"}, {"literal":"-"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$3"]},
    {"name": "PlainArrow$string$4", "symbols": [{"literal":"="}, {"literal":"="}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$4"]},
    {"name": "PlainArrow$string$5", "symbols": [{"literal":"<"}, {"literal":"="}, {"literal":"="}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$5"]},
    {"name": "PlainArrow$string$6", "symbols": [{"literal":"<"}, {"literal":"="}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$6"]},
    {"name": "PlainArrow$string$7", "symbols": [{"literal":"~"}, {"literal":"~"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$7"]},
    {"name": "PlainArrow$string$8", "symbols": [{"literal":"<"}, {"literal":"~"}, {"literal":"~"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$8"]},
    {"name": "PlainArrow$string$9", "symbols": [{"literal":"<"}, {"literal":"~"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "PlainArrow", "symbols": ["PlainArrow$string$9"]},
    {"name": "QualifiedArrow$string$1", "symbols": [{"literal":"-"}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$2", "symbols": [{"literal":"]"}, {"literal":"-"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$1", "Attributes", "QualifiedArrow$string$2"]},
    {"name": "QualifiedArrow$string$3", "symbols": [{"literal":"<"}, {"literal":"-"}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$4", "symbols": [{"literal":"]"}, {"literal":"-"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$3", "Attributes", "QualifiedArrow$string$4"]},
    {"name": "QualifiedArrow$string$5", "symbols": [{"literal":"<"}, {"literal":"-"}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$6", "symbols": [{"literal":"]"}, {"literal":"-"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$5", "Attributes", "QualifiedArrow$string$6"]},
    {"name": "QualifiedArrow$string$7", "symbols": [{"literal":"="}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$8", "symbols": [{"literal":"]"}, {"literal":"="}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$7", "Attributes", "QualifiedArrow$string$8"]},
    {"name": "QualifiedArrow$string$9", "symbols": [{"literal":"<"}, {"literal":"="}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$10", "symbols": [{"literal":"]"}, {"literal":"="}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$9", "Attributes", "QualifiedArrow$string$10"]},
    {"name": "QualifiedArrow$string$11", "symbols": [{"literal":"<"}, {"literal":"="}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$12", "symbols": [{"literal":"]"}, {"literal":"="}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$11", "Attributes", "QualifiedArrow$string$12"]},
    {"name": "QualifiedArrow$string$13", "symbols": [{"literal":"~"}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$14", "symbols": [{"literal":"]"}, {"literal":"~"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$13", "Attributes", "QualifiedArrow$string$14"]},
    {"name": "QualifiedArrow$string$15", "symbols": [{"literal":"<"}, {"literal":"~"}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$16", "symbols": [{"literal":"]"}, {"literal":"~"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$15", "Attributes", "QualifiedArrow$string$16"]},
    {"name": "QualifiedArrow$string$17", "symbols": [{"literal":"<"}, {"literal":"~"}, {"literal":"["}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow$string$18", "symbols": [{"literal":"]"}, {"literal":"~"}, {"literal":">"}], "postprocess": (d) => d.join('')},
    {"name": "QualifiedArrow", "symbols": ["QualifiedArrow$string$17", "Attributes", "QualifiedArrow$string$18"]},
    {"name": "Attributes$ebnf$1", "symbols": ["Identity"], "postprocess": id},
    {"name": "Attributes$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Attributes$ebnf$2", "symbols": ["Labels"], "postprocess": id},
    {"name": "Attributes$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "Attributes$ebnf$3", "symbols": ["Record"], "postprocess": id},
    {"name": "Attributes$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "Attributes", "symbols": ["Attributes$ebnf$1", "Attributes$ebnf$2", "Attributes$ebnf$3"]},
    {"name": "Identity", "symbols": ["Value"]},
    {"name": "Labels$subexpression$1", "symbols": ["DeclaredLabels"]},
    {"name": "Labels$subexpression$1", "symbols": ["DefinedLabels"]},
    {"name": "Labels", "symbols": ["Labels$subexpression$1"]},
    {"name": "DeclaredLabels$ebnf$1$subexpression$1", "symbols": ["Declare", "Label"]},
    {"name": "DeclaredLabels$ebnf$1", "symbols": ["DeclaredLabels$ebnf$1$subexpression$1"]},
    {"name": "DeclaredLabels$ebnf$1$subexpression$2", "symbols": ["Declare", "Label"]},
    {"name": "DeclaredLabels$ebnf$1", "symbols": ["DeclaredLabels$ebnf$1", "DeclaredLabels$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "DeclaredLabels", "symbols": ["DeclaredLabels$ebnf$1"]},
    {"name": "DefinedLabels$ebnf$1$subexpression$1", "symbols": ["Define", "Label"]},
    {"name": "DefinedLabels$ebnf$1", "symbols": ["DefinedLabels$ebnf$1$subexpression$1"]},
    {"name": "DefinedLabels$ebnf$1$subexpression$2", "symbols": ["Define", "Label"]},
    {"name": "DefinedLabels$ebnf$1", "symbols": ["DefinedLabels$ebnf$1", "DefinedLabels$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "DefinedLabels", "symbols": ["DefinedLabels$ebnf$1"]},
    {"name": "Label", "symbols": ["Symbol"]},
    {"name": "Record", "symbols": [{"literal":"{"}, "_", {"literal":"}"}, "_"]},
    {"name": "Record$ebnf$1", "symbols": []},
    {"name": "Record$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_", "Property"]},
    {"name": "Record$ebnf$1", "symbols": ["Record$ebnf$1", "Record$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Record", "symbols": [{"literal":"{"}, "_", "Property", "Record$ebnf$1", {"literal":"}"}, "_"]},
    {"name": "Property$subexpression$1", "symbols": ["Declare"]},
    {"name": "Property$subexpression$1", "symbols": ["Define"]},
    {"name": "Property", "symbols": ["Symbol", "_", "Property$subexpression$1", "_", "Value"]},
    {"name": "Declare$string$1", "symbols": [{"literal":":"}, {"literal":":"}], "postprocess": (d) => d.join('')},
    {"name": "Declare", "symbols": ["Declare$string$1"]},
    {"name": "Define", "symbols": [{"literal":":"}]},
    {"name": "Value", "symbols": ["Null"]},
    {"name": "Value", "symbols": ["Boolean"]},
    {"name": "Value", "symbols": ["Symbol"]},
    {"name": "Value", "symbols": ["NumericLiteral"]},
    {"name": "Value", "symbols": ["StringLiteral"]},
    {"name": "Value", "symbols": ["Measurement"]},
    {"name": "Value", "symbols": ["TaggedStringLiteral"]},
    {"name": "Value", "symbols": ["Range"]},
    {"name": "Null$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": (d) => d.join('')},
    {"name": "Null", "symbols": ["Null$string$1"]},
    {"name": "Boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "Boolean", "symbols": ["Boolean$string$1"]},
    {"name": "Boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "Boolean", "symbols": ["Boolean$string$2"]},
    {"name": "Symbol$ebnf$1", "symbols": []},
    {"name": "Symbol$ebnf$1", "symbols": ["Symbol$ebnf$1", /[0-9a-zA-Z_@]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Symbol", "symbols": [/[a-zA-Z_]/, "Symbol$ebnf$1"]},
    {"name": "Symbol", "symbols": ["StringLiteral"]},
    {"name": "Range$string$1", "symbols": [{"literal":"."}, {"literal":"."}], "postprocess": (d) => d.join('')},
    {"name": "Range", "symbols": ["NumericLiteral", "Range$string$1", "NumericLiteral"]},
    {"name": "Range$string$2", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": (d) => d.join('')},
    {"name": "Range", "symbols": ["NumericLiteral", "Range$string$2"]},
    {"name": "Range$string$3", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": (d) => d.join('')},
    {"name": "Range", "symbols": ["Range$string$3", "NumericLiteral"]},
    {"name": "NumericLiteral", "symbols": ["Integer"]},
    {"name": "NumericLiteral", "symbols": ["Decimal"]},
    {"name": "NumericLiteral", "symbols": ["Hexadecimal"]},
    {"name": "NumericLiteral", "symbols": ["Octal"]},
    {"name": "NumericLiteral", "symbols": ["Percentage"]},
    {"name": "Integer$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "Integer$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "Integer$ebnf$1", "symbols": ["Integer$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Integer$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Integer$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "Integer$ebnf$2", "symbols": ["Integer$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Integer", "symbols": ["Integer$ebnf$1", "Integer$ebnf$2"]},
    {"name": "Decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "Decimal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "Decimal$ebnf$2", "symbols": ["Decimal$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "Decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["Decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "Decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "Decimal$ebnf$3", "symbols": ["Decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "Decimal$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "Decimal$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "Decimal$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Decimal$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "Decimal$ebnf$4$subexpression$1$ebnf$2", "symbols": ["Decimal$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Decimal$ebnf$4$subexpression$1", "symbols": [/[eE]/, "Decimal$ebnf$4$subexpression$1$ebnf$1", "Decimal$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "Decimal$ebnf$4", "symbols": ["Decimal$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "Decimal$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "Decimal", "symbols": ["Decimal$ebnf$1", "Decimal$ebnf$2", "Decimal$ebnf$3", "Decimal$ebnf$4"]},
    {"name": "Hexadecimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "Hexadecimal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Hexadecimal$string$1", "symbols": [{"literal":"0"}, {"literal":"x"}], "postprocess": (d) => d.join('')},
    {"name": "Hexadecimal$ebnf$2", "symbols": [/[0-9a-fA-F]/]},
    {"name": "Hexadecimal$ebnf$2", "symbols": ["Hexadecimal$ebnf$2", /[0-9a-fA-F]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Hexadecimal", "symbols": ["Hexadecimal$ebnf$1", "Hexadecimal$string$1", "Hexadecimal$ebnf$2"]},
    {"name": "Octal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "Octal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Octal$ebnf$2", "symbols": [/[0-7]/]},
    {"name": "Octal$ebnf$2", "symbols": ["Octal$ebnf$2", /[0-7]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Octal", "symbols": ["Octal$ebnf$1", {"literal":"0"}, "Octal$ebnf$2"]},
    {"name": "Measurement", "symbols": ["Decimal", "Symbol"]},
    {"name": "Percentage", "symbols": ["Decimal", {"literal":"%"}]},
    {"name": "StringLiteral", "symbols": ["DoubleQuotedLiteral"]},
    {"name": "StringLiteral", "symbols": ["SingleQuotedLiteral"]},
    {"name": "StringLiteral", "symbols": ["BacktickStringLiteral"]},
    {"name": "DoubleQuotedLiteral$ebnf$1", "symbols": []},
    {"name": "DoubleQuotedLiteral$ebnf$1", "symbols": ["DoubleQuotedLiteral$ebnf$1", "NonDoubleQuoteChar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "DoubleQuotedLiteral", "symbols": [{"literal":"\""}, "DoubleQuotedLiteral$ebnf$1", {"literal":"\""}]},
    {"name": "SingleQuotedLiteral$ebnf$1", "symbols": []},
    {"name": "SingleQuotedLiteral$ebnf$1", "symbols": ["SingleQuotedLiteral$ebnf$1", "NonSingleQuoteChar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "SingleQuotedLiteral", "symbols": [{"literal":"'"}, "SingleQuotedLiteral$ebnf$1", {"literal":"'"}]},
    {"name": "BacktickStringLiteral$ebnf$1", "symbols": []},
    {"name": "BacktickStringLiteral$ebnf$1", "symbols": ["BacktickStringLiteral$ebnf$1", /[^`]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "BacktickStringLiteral", "symbols": [{"literal":"`"}, "BacktickStringLiteral$ebnf$1", {"literal":"`"}]},
    {"name": "TaggedStringLiteral", "symbols": ["Symbol", "BacktickStringLiteral"]},
    {"name": "NonDoubleQuoteChar", "symbols": [/[^\\"\n]/]},
    {"name": "NonDoubleQuoteChar", "symbols": [{"literal":"\\"}, "EscapedChars"]},
    {"name": "NonSingleQuoteChar", "symbols": [/[^\\'\n]/]},
    {"name": "NonSingleQuoteChar", "symbols": [{"literal":"\\"}, "EscapedChars"]},
    {"name": "NonSingleQuoteChar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": (d) => d.join('')},
    {"name": "NonSingleQuoteChar", "symbols": ["NonSingleQuoteChar$string$1"]},
    {"name": "EscapedChars", "symbols": [/["\\/bfnrt]/]},
    {"name": "EscapedChars", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/]}
  ],
  ParserStart: "Gram",
};

export default grammar;
