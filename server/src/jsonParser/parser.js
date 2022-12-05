const nearley = require("nearley");
// const grammar = require("./grammar.js");
import { default as grammar } from "./grammar";

// Create a Parser object from our grammar.
export const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
// export function jsonParser() {
//   return new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
// }

// Parse something!
// parser.feed("foo\n");

// parser.results is an array of possible parsings.
// console.log(JSON.stringify(parser.results));
