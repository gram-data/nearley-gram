import * as Effect from "effect/Micro"
import * as Either from "effect/Either"

import { parse } from './nearley-gram';

describe('node patterns', () => {
  test.each([
    '()',
    '(),()',
    '(), ()',
    '(), (), ()'
  ])
  ('can be: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
})

describe('node identifiers', () => {
  test.each([
    '(a)',
    '(Z)',
    '(A)',
    '(Z)',
    '(_)',
    '(aa)',
    '(a1)',
    '(abk@HERE)',
    '("a sentence of words")',
    '(1)',
    '(0xBE)',
  ])
  ('can be: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
  test.each([
    '(-)',
    '(*)',
  ])
  ('can not be: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isLeft(result)).toBeTruthy();
  })
})

describe('node labels', () => {
  test.each([
    '(a:Aye)',
    '(ab:Aye:Bee)',
    '(a:"A few words with whitespace")',
    "(a:'Words within single quotes')",
    "(a:`Words within backticks`)"
  ])
  ('can be Symbols like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
  test.each([
    '(a:)',
    '(a:1)',
    `(a:0x1337)`
  ])
  ('can not be things like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isLeft(result)).toBeTruthy();
  })
  test.each([
    '(a:true)',
    '(a:false)',
    '(a:null)',
  ])
  ('can be value KEYWORDS that are understood to be symbols, like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })

})


describe('node annotation', () => {
  test.each([
    '@description("a simple node") (a)',
  ])
  ('can be: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
})
