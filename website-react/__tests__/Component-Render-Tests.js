import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/Header';
import Todo from '../src/components/Todo'
import SortBy from '../src/components/SortBy'
import Navbar from '../src/Navbar';
import NavBarComponent from '../src/components/NavBarComponent';
import NavBarItems from '../src/Navbar';

test('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<Todo />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Navbar correctly', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Navbar correctly', () => {
  const tree = renderer.create(<SortBy />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Navbar correctly', () => {
  const tree = renderer.create(<NavBarComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Navbar items list correctly', () => {
  const tree = renderer.create(<NavBarItems />).toJSON();
  expect(tree).toMatchSnapshot();
});