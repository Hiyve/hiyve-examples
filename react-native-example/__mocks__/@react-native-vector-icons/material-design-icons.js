/**
 * Mock for @react-native-vector-icons/material-design-icons
 *
 * Replaces the native icon component with a simple Text element
 * that displays the icon name for test assertions.
 */
const React = require('react');
const {Text} = require('react-native');

const Icon = (props) =>
  React.createElement(Text, {testID: 'mock-icon', ...props}, props.name || '');

Icon.getImageSource = jest.fn().mockResolvedValue({uri: 'mock-icon-uri'});
Icon.getImageSourceSync = jest.fn(() => ({uri: 'mock-icon-uri'}));

module.exports = Icon;
module.exports.default = Icon;
