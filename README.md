# get-react-spectrum-modules

[![Test](https://github.com/msabramo/get-react-spectrum-modules/actions/workflows/test.yaml/badge.svg)](https://github.com/msabramo/get-react-spectrum-modules/actions/workflows/test.yaml)

This package exports a function that returns an array of all [React Spectrum][]
modules that it finds in the `node_modules` directory.

One use case for this function is it can be used to wrap the [Next.js][]
configuration in `next.config.js` so that React Spectrum works in [Next.js][]
without any errors.

You can do something like this in your `next.config.js`:

```js
const nextTranspileModules = require("next-transpile-modules");
const getReactSpectrumModules = require("get-react-spectrum-modules");

// This wraps the Next.js configuration to do some transpilations so that React
// Spectrum works in Next.js without any errors.
//
// Inspired by https://react-spectrum.adobe.com/react-spectrum/ssr.html#nextjs
//
const withTM = nextTranspileModules(getReactSpectrumModules());

module.exports = withTM({
  // Your Next.js configuration
});
```

[react spectrum]: https://react-spectrum.adobe.com/react-spectrum/
[next.js]: https://nextjs.org/
