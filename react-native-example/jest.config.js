module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@hiyve/rn-react$': '<rootDir>/__mocks__/@hiyve/rn-react.js',
    '^@hiyve/rn-core$': '<rootDir>/__mocks__/@hiyve/rn-core.js',
    '^@hiyve/rtc-client-rn$': '<rootDir>/__mocks__/@hiyve/rtc-client-rn.js',
  },
  transformIgnorePatterns: [
    // pnpm stores packages in node_modules/.pnpm/<name>@<version>/node_modules/<name>/
    // so we need to allow transforms through the .pnpm directory as well
    'node_modules/(?!(.pnpm|@react-native|react-native|react-native-safe-area-context|@react-native-async-storage|@react-native-vector-icons)/)',
    // Inside .pnpm, allow transforms for react-native and related packages
    '\\.pnpm/(?!(@react-native|react-native|@react-native-async-storage|@react-native-vector-icons))',
  ],
};
