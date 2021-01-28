# [@tinkerstorm/validate](https://npmjs.org/package/@tinkerstorm/validate)

![CI status](https://github.com/TinkerStorm/validate/workflows/CI/badge.svg)
![NPM build](https://badgen.net/npm/v/@tinkerstorm/validate)
![NPM types](https://badgen.net/npm/types/@tinkerstorm/validate)
![GitHub license](https://badgen.net/github/license/TinkerStorm/validate)
![GitHub stars](https://badgen.net/github/stars/TinkerStorm/validate)

## Why?

Why not? Some code is designed to look like it shouldn't exist, but does anyway and works just as well. It was originally designed to be a simple 'private' method that would sit in a class structure or module without the need to use it elsewhere.

```js
const typeofAny = (target, ...types) => types.some(type => typeof target === type);

// first attempt did not include the options parameter
function validate(origin, args) {
  for (let [varName, value, anyof] of args) {
    if (!typeofAny(value, ...anyof)) {
      throw new TypeError(`${varName} (${value}) from ${origin} is not of any type ${anyof}`);
    }
  }
}
```

At the end of it all, this first working version probably took around 3 or 4 hours (including testing and minor patches).

## Credit

While I do like what I've accomplished here, it is still a joke in many ways and there are people I'd like to thank for supporting what I do or those who I look up to as inspiration.

- [@Koltonix](https://github.com/Koltonix) and [@Mistiaire](https://github.com/Mistiaire) for their guidance and support.
- [@sindresorhus](https://github.com/sindresorhus) for continuing to provide the basis on how I, personally, should build my modules and projects (or at least a target to aim for).