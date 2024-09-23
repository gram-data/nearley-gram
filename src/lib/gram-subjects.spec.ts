import * as Effect from "effect/Micro"
import * as Either from "effect/Either"

import { parse } from './nearley-gram';


describe('subject patterns', () => {
  test.each([
    '[]',
    '[],[]',
    '[], []'
  ])
  ('can be empty: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
  test.each([
    '[a]',
    '[1],[2]',
    '[true], [false]'
  ])
  ('can be identified: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })

  test.each([
    '[a_number | 1]',
    '[numbers | 1,2,3]',
    '[a_relationship --> a,b]',
    '[an_ordered_pattern --> a,b,c,a]',
    '[inlined_path_pattern --> (a)-->(b), (c)-->(d), (b)-->(d)]'
  ])
  ('can have an association: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
})
