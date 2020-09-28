// workaround for this: https://github.com/facebook/jest/issues/7359
const config = require("../babel.config");

const { createTransformer } = require("babel-jest");
module.exports = createTransformer({
  ...config,
});
