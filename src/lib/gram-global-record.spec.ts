
import { Effect, Either, Exit, Cause } from "effect"

import { parse } from './nearley-gram';
import { Parser } from "nearley";

const debugExit = (x:Exit.Exit<Parser, unknown>) => Exit.match(x,
  {
    onSuccess: (success) => JSON.stringify(success.results),
    onFailure: (error) => Cause.pretty(error)
  }
)

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
    ["{k:[1]}", "an array with a single number"],
    ["{k:[1,2,3]}", "an array with numbers"],
    ["{k:{kk:'nested'}}", "a nested record"]
  ])
  ('can define values like %s, which is %s', async (gram, description) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    if (Exit.isFailure(result)) console.error(debugExit(result))
    expect(Exit.isSuccess(result)).toBeTruthy();
  })

  test.each([
    '{k:1, n:2, m:3}',
    '{k:1, n:"a", m:42.2cm}',
  ])
  ('can define multiple values like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    if (Exit.isFailure(result)) console.error(debugExit(result))
    expect(Exit.isSuccess(result)).toBeTruthy();
  })
  it('can not appear twice', async () => {
    const gram = `{k:1} {k:2} {k:3} {k:4}`;
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    if (Exit.isSuccess(result)) console.error(debugExit(result))
    expect(Exit.isFailure(result)).toBeTruthy();

  })

  test.each([
    '{s::string, b::boolean, i::integer}',
  ])
  ('can declare multiple keys like: %s', async (gram) => {
    const task = parse(gram);
    const result = await Effect.runPromiseExit(task)
    expect(Exit.isSuccess(result)).toBeTruthy();
  })
})
