// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const path = require("path");

module.exports = {
  testRegex: "src/.*\\.test\\.(js|ts|tsx)",
  transform: {
    "^.+\\.tsx?$": path.resolve(__dirname, "./.jest/babel-jest-transformer.js"),
    // TODO: probably should use a separate babel config for js files to just handle es modules
    "^.+\\.js?$": path.resolve(__dirname, "./.jest/babel-jest-transformer.js")
  },
  transformIgnorePatterns: [],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/*.spec.{tsx,ts,js}",
    "!**/*.stories.{tsx,ts,js}"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: ["./src/setupTests.ts"]
};
