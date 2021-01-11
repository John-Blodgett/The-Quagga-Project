import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/Header';
import Navbar from '../src/Navbar';

test('renders Header correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Navbar correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});

var sampleAssignment = {
    'name': 'HW1',
    'desc': 'HW1 is blah blah blah',
    'pointsPossible': 10,
    'grade' : 80,
    'className': 'CSC309'
    };
var sampleAssignment2 = {
    'name': 'HW2',
    'desc': 'HW2 is about doing stuff',
    'pointsPossible': 30,
    'grade' : 100,
    'className': 'CSC430'
    };
var sampleAssignment3 = {
  'name': 'HW3',
  'desc': 'HW is about 309',
  'pointsPossible': 30,
  'grade' : 50,
  'className': 'CSC309'
  };

var todoList = [sampleAssignment, sampleAssignment2, sampleAssignment3]
const CSC309Classes = [sampleAssignment3, sampleAssignment]
const CSC430Classes = [sampleAssignment2]

function classWithHighestGrade(todoList) {
  const sortedList = todoList.sort((ele1, ele2) => { 
    return ele2['grade'] - ele1['grade'];})
  return sortedList[0]
}
function classWithLowestGrade(todoList) {
  const sortedList = todoList.sort((ele1, ele2) => { 
    return ele1['grade'] - ele2['grade'];})
  return sortedList[0]
}

function singleClassAssignments(todoList, name) {
const singleClass = todoList.filter((ele1) => { 
  return ele1['className'] == name;})
return singleClass
}


test('Finds the highest grade in a given assignments list', () => {
  expect(classWithHighestGrade(todoList)).toStrictEqual(sampleAssignment2);
});

test('Finds the lowest grade in a given assignments list', () => {
  expect(classWithLowestGrade(todoList)).toStrictEqual(sampleAssignment3);
});

test('Filers for all 309 courses', () => {
  expect(singleClassAssignments(todoList, "CSC309")).toStrictEqual(CSC309Classes);
});

test('Filers for all 430 courses', () => {
  expect(singleClassAssignments(todoList, "CSC430")).toStrictEqual(CSC430Classes);
});