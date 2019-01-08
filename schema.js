module.exports =
{
  "scope": {
    "type": "string",
    "enum": [
      // names of attributes (e.g. `class` in `<div class=something>`)
      "attribute",

      // comments (e.g. this line of this file)
      "comment",

      // names of constant values (e.g. `MAX_LENGTH`)
      "constant",

      // names of built-in constant values (e.g. `NULL`, `true`)
      "constant.builtin",

      // names of data constructors
      "constructor",

      // names of built-in data constructors
      "constructor.builtin",

      // code embedded within another literal (should reset to the default color)
      "embedded",

      // escape sequence in a literal (e.g. `\t`)
      "escape",

      // names of functions
      "function",

      // names of built-in functions
      "function.builtin",

      // keywords with special meaning (e.g. `if`, `class`)
      "keyword",

      // numbers (e.g. `123`, `0xA0FFD1`)
      "number",

      // Operators (e.g. `+`, `===`)
      "operator",

      // names of properties (e.g. `age` in `person.age`)
      "property",

      // names of built-in properties
      "property.builtin",

      // punctuation characters
      "punctuation",
      "punctuation.bracket",
      "punctuation.delimiter",
      "punctuation.special",

      // string literals
      "string",

      // string-like literals (e.g. regexes, symbols)
      "string.special",

      // names of tags (e.g. `div` in `<div></div>`)
      "tag",

      // names of types
      "type",

      // names of built-in types (e.g. `int`, `void`)
      "type.builtin",

      // names of variables
      "variable",

      // names of built-in variables (e.g. `this`, `self`, `__dirname`)
      "variable.builtin"
    ]
  },
  "injection-language": {
    "oneOf": [
      {
        "type": "string"
      },
      {
        "type": "object"
      }
    ]
  },
  "injection-content": {
    "type": "object"
  }
}
