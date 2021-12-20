const nextTranspileModules = require("next-transpile-modules");
const getReactSpectrumModules = require("../../");

// This wraps the Next.js configuration to do some transpilations so that React
// Spectrum works in Next.js without any errors.
//
// Inspired by https://react-spectrum.adobe.com/react-spectrum/ssr.html#nextjs
const withReactSpectrum = nextTranspileModules(getReactSpectrumModules());

module.exports = withReactSpectrum({ reactStrictMode: true });
