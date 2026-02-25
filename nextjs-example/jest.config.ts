import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@hiyve/react$': '<rootDir>/__mocks__/@hiyve/react.ts',
    '^@hiyve/react-ui$': '<rootDir>/__mocks__/@hiyve/react-ui.tsx',
    '^@hiyve/utilities$': '<rootDir>/__mocks__/@hiyve/utilities.ts',
  },
};

export default createJestConfig(config);
