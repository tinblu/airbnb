const path = require('path')

const resolve = pathname => path.resolve(__dirname,pathname)
const CracoLessPlugin = require("craco-less");

module.exports = {
  //less //install craco-less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],


  //webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }
}