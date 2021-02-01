# @tinkerstorm/validate

[![npm (version)](https://badgen.net/npm/v/@tinkerstorm/validate)](https://npm.im/@tinkerstorm/validate)
[![npm (types)](https://badgen.net/npm/types/@tinkerstorm/validate)](https://npm.im/@tinkerstorm/validate)
[![npm (downloads)](https://badgen.net/npm/dw/@tinkerstorm/validate)](https://npm.im/@tinkerstorm/validate)
[![npm (dependants)](https://badgen.net/npm/dependents/@tinkerstorm/validate)](https://npm.im/@tinkerstorm/validate)

[![github (workflow)](https://github.com/TinkerStorm/validate/workflows/Build/badge.svg)](https://github.com/TinkerStorm/validate/actions)
[![github (stars)](https://badgen.net/github/stars/TinkerStorm/validate)](https://github.com/TinkerStorm/validate/stargazers)
[![github (open-issues)](https://badgen.net/github/open-issues/TinkerStorm/validate)](https://github.com/TinkerStorm/validate/issues)
[![github (open-prs)](https://badgen.net/github/open-prs/TinkerStorm/validate)](https://github.com/TinkerStorm/validate/pulls)

[![linter (xo)](https://badgen.net/badge/🎨%20linter/xo/690DCA)](https://github.com/xojs/xo)
[![test env (ava)](https://badgen.net/badge/🧰%20toolbox/ava/F84824)](https://github.com/avajs/ava)
[![discord (chat)](https://badgen.net/badge/discord/chat/7289DA?icon=discord)](https://discord.gg/Bb3JQQG)

## API

### validate(origin: string, args: ValidateOptions[])

#### origin

Where the function is called from (human-readable string).

#### args

A list of arguments that define how the function accepts parameters.
> The argument is to be passed as an array, which is then deconstructed into the positional descriptors below.

---

### ValidateOptions as [name, value, types, options?]

| Argument           | Type                       | Description                                                                  |
| ------------------ | -------------------------- | ---------------------------------------------------------------------------- |
| `name`             | `string`                   | Name of the argument as a string literal.                                    |
| `value`            | `any`                      | The value of the argument as anything that the `types` and `options` accept. |
| `types`            | `string, object, function` | An array of type resolvers.                                                  |
| `options`          | `object?`                  | Argument options, can be omitted.                                            |
| `options.inverse`  | `boolean?`                 | Flip the condition state.                                                    |
| `options.rest`     | `boolean?`                 | Process the argument as an array.                                            |
| `options.optional` | `boolean?`                 | Make the argument not throw if it's null / undefined. Short hand check.      |

## API (Future)

*Remains to be said or written in stone. Support for decorators is on next major release.*

- `validate.one(origin: string, name: string, value: any, types: (string | object | () => boolean)[], options?: ValidateOptions)`
- `validate.arg(types: (string | object | () => boolean)[], options?: ValidateOptions)`

---

- `validate.checks[key: string](value?: any) => boolean`
- `validate.checks.exists(value?: any) => boolean` - Possiblity to move `options.optional` to this predicate...
- `validate.checks.truthy(value?: any) => boolean`
- `validate.checks.int(value: int?) => boolean`

### Type bound

*This would make use of predicate construction by passing the context of the previous scope through to the child.*

- `validate.checks.min<T>(n: T) => (value: T?) => boolean`
- `validate.checks.max<T>(n: T) => (value: T?) => boolean`
- `validate.checks.between<T>(low: T, high: T) => (value: T?) => boolean`
  > The generic of `T` would infer that the accepted type has already been checked or is yet to be checked, but will default to that of primative `number`.
  > - Could also be applied to `string` or `Array` when making use of the `.length` property. Either would work.

## Why?

Why not? Some code is designed to look like it shouldn't exist, but does anyway and works just as well. It was originally designed to be a simple 'private' method that would sit in a class structure or module without the need to use it elsewhere.

At the base level of functionality, it verifies the type declarations, then object derivatives / class structures, and finally functions. While it may not seem like much, the overarching functions with the array, inverse and optional support provide some functionality I had never intended to begin with.

At the end of it all, this first working version probably took around 3 or 4 hours (including testing and minor patches).

## Credit

While I do like what I've accomplished here, it is still a joke in many ways and there are people I'd like to thank for supporting what I do or those who I look up to as inspiration.

- [@Koltonix](https://github.com/Koltonix) and [@Mistiare](https://github.com/Mistiare) for their guidance and support.
- [@sindresorhus](https://github.com/sindresorhus) for continuing to provide the basis on how I, personally, should build my modules and projects (or at least a target to aim for).
  > Also for the amazing toolset of [xo](https://github.com/xojs/xo) and [ava](https://avajs.dev).