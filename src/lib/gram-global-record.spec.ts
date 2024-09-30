import * as Effect from "effect/Micro"
import * as Either from "effect/Either"

import { parse } from './nearley-gram';


describe('global record', () => {
  test.each([
    ['{}',"an empty record"],
    ['{k:1}',"an integer"],
    ['{k:0x1337}',"a hexadecimal"],
    ['{k:007}',"an octal"],
    ['{k:3.1495}',"a decimal"],
    ['{k:42cm}',"a measurement"],
    ['{k:"v"}',"a double-quoted string"],
    ["{k:'v'}","a single-quoted string"],
    ["{k:`v`}","a backtick-quoted string"],
    ["{k:md`# Markdown headline`}","a tagged string literal"],
    ["{k:html`<h1>Hypertext Markup Language</h1>}","another tagged string literal"],
    ["{k:url`https://github.com/gram-data/nearley-gram`}","tagging a URL string"],
    ["{k:1..3}","a bounded range"],
    ["{k:1...}","a lower-bounded range"],
    ["{k:...3}","an upper-bounded range"],
  ])
  ('can define values like %s, which is %s', async (gram, description) => {
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
