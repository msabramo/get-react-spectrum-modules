import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleDirectories: ["<rootDir>/src", "node_modules"],
};

module.exports = config;
