module.exports =
{
  "scope": {
    "type": "string",
    "enum": [
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

      "keyword",

      // numbers
      "number",

      // names of properties (e.g. `age` in `person.age`)
      "property",

      // names of built-in properties
      "property.builtin",

      // punctuation characters
      "punctuation",

      // punctuation characters with extra emphasis
      "punctuation.special",

      // string literals
      "string",

      // string-like literals (e.g. regexes, symbols)
      "string.special",

      // names of types
      "type",

      // names of built-in types (e.g. `int`, `void`)
      "type.builtin",

      // names of variables
      "variable",

      // names of built-in variables (e.g. `this`, `self`, `__dirname`)
      "variable.builtin"
    ]
  }
}
