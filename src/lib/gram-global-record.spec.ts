import * as Effect from "effect/Micro"
import * as Either from "effect/Either"

import { parse } from './nearley-gram';


describe('global record', () => {
  test.each([
    '{}',
    '{k:1}',
    '{k:0x1337}',
    '{k:007}',
    '{k:3.1495}',
    '{k:42cm}',
    '{k:"v"}',
    "{k:'v'}",
    "{k:`v`}",
    "{k:md`# Markdown headline`}",
    "{k:html`<h1>Hypertext Markup Language</h1>}",
    "{k:url`https://github.com/gram-data/nearley-gram`}"
  ])
  ('can define a single value like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })

  test.each([
    '{k:1, n:2, m:3}',
    '{k:1, n:"a", m:42.2cm}',
  ])
  ('can define multiple values like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
  it('cannot appear twice', async () => {
    const gram = `{k:1} {k:2}`;
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isLeft(result)).toBeTruthy();

  })

  test.each([
    '{s::string, b::boolean, i::integer}',
  ])
  ('can declare multiple keys like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Either.isRight(result)).toBeTruthy();
  })
})
