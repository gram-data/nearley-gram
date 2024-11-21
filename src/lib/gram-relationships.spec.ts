import * as Effect from "effect/Micro"
import * as Either from "effect/Either"

import { parse } from './nearley-gram';

describe('relationship patterns', () => {
  test.each([
    '()-->()',
    '()-->()-->()',
    '()<--()',
    '()<->()',
    '()-->()<--()',
    '()==>()',
    '()<==()',
    '()<=>()',
    '()~~>()',
    '()<~~()',
    '()<~>()'
  ])
  ('can be: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
})
describe('relationship identifiers', () => {
  test.each([
    '()-[a]->()',
    '()-["a"]->()',
    '()-[2]->()'
  ])
  ('can be: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
})

