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
    ['[{title:"a number"} | 1]', 'annotation for a single element', '({title:"a number"})-->(1)'],
    ['[ns | 1,2,3]', 'description of a set', '(ns)-->(1),(ns)-->(2),(ns)-->(3)'],
    ['[:R | (a)-->(b), (c)-->(d)]', 'composed paths', '(a)-->(b)-[:R {i:0}]->(c)-->(d)'],
  ])
  ('can have an association `%s` meaning %s, equivalent to the path notation `%s`', async (gram,description, equivalent) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
  
})
