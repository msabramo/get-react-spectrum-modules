// This defines a function called `getModules` that can get an array of all
// React Spectrum modules.
//
// One use case for this function is it can be used to wrap the Next.js
// configuration in `next.config.js` so that React Spectrum works in Next.js
// without any errors.
//
// You can do something like this in your `next.config.js`:
//
// <next.config.js>
//
// const nextTranspileModules = require("next-transpile-modules");
// const getReactSpectrumModules = require("get-react-spectrum-modules");
//
// // This wraps the Next.js configuration to do some transpilations so that React
// // Spectrum works in Next.js without any errors.
// //
// // Inspired by https://react-spectrum.adobe.com/react-spectrum/ssr.html#nextjs
// //
// const withTM = nextTranspileModules(getReactSpectrumModules());
//
// module.exports = withTM({
//   // Your Next.js configuration
// });
//
// </next.config.js>

const fs = require("fs");

// Returns something like [
//   '@adobe/react-spectrum',
//   '@adobe/react-spectrum-ui',
//   '@adobe/react-spectrum-workflow',
//   '@react-spectrum/actiongroup',
//   '@react-spectrum/breadcrumbs',
//   '@react-spectrum/button',
//    ...
//   '@spectrum-icons/ui',
//   '@spectrum-icons/workflow'
// ]
module.exports = () =>
[
  "@adobe",
  "@react-spectrum",
  "@spectrum-icons"
].flatMap((ns) =>
  fs.readdirSync(`./node_modules/${ns}`).map((dir) => `${ns}/${dir}`),
);
