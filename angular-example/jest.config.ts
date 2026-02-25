import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@hiyve/angular$': '<rootDir>/src/__mocks__/@hiyve/angular.ts',
    '^@hiyve/core$': '<rootDir>/src/__mocks__/@hiyve/core.ts',
    '^@hiyve/utilities$': '<rootDir>/src/__mocks__/@hiyve/utilities.ts',
  },
};

export default config;
