
var sampleAssignment = {
    'name': 'HW10',
    'desc': 'HW10 is blah blah blah',
    'pointsPossible': 10,
    'grade' : 80,
    'className': 'CSC309'
    };
var sampleAssignment2 = {
    'name': 'HW20',
    'desc': 'HW20 Sucks',
    'pointsPossible': 30,
    'grade' : 100,
    'className': 'CSC309'
    };
var sampleAssignment3 = {
  'name': 'HW21',
  'desc': 'Fun Assignment',
  'pointsPossible': 30,
  'grade' : 50,
  'className': 'CSC309'
  };

var todoList = [sampleAssignment, sampleAssignment2, sampleAssignment3]

function highestGrade(todoList) {
  const sortedList = todoList.sort((ele1, ele2) => { 
    return ele2['grade'] - ele1['grade'];})
  return sortedList[0]['grade']
}

test('Sorts the todo assignments', () => {
  expect(highestGrade(todoList)).toBe(100);
});



