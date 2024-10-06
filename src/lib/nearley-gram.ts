import * as Effect from "effect/Micro"

import * as nearley from 'nearley';

import grammar from './generated-grammar';

export const makeParser = () => new nearley.Parser(
  nearley.Grammar.fromCompiled(grammar)
);

/** 
 * Make a parser then parse the given text.
 */
export const parse = (text: string) =>
  Effect.try({
    try: () => makeParser().feed(text),
    catch: (e) => e
  })

export const doParse = (text: string) => Effect.runPromise(parse(text))