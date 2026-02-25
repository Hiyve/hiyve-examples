/**
 * Mock for react-native-safe-area-context
 *
 * Provides passthrough implementations of SafeAreaProvider and SafeAreaView
 * so tests can render components that use safe area insets without native
 * module bindings.
 */
const React = require('react');
const {View} = require('react-native');

const SafeAreaProvider = ({children, ...props}) =>
  React.createElement(View, {testID: 'safe-area-provider', ...props}, children);

const SafeAreaView = ({children, ...props}) =>
  React.createElement(View, {testID: 'safe-area-view', ...props}, children);

const useSafeAreaInsets = () => ({top: 0, right: 0, bottom: 0, left: 0});

const SafeAreaInsetsContext = {
  Consumer: ({children}) => children({top: 0, right: 0, bottom: 0, left: 0}),
  Provider: SafeAreaProvider,
};

module.exports = {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
  SafeAreaInsetsContext,
};
