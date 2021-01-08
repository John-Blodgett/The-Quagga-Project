//__tests__/Header-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../src/Navbar';

test('renders Navbar correctly', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
