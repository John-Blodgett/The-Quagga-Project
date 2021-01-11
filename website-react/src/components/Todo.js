import React from 'react';
import './Todo.css';

export default function Todo() {
    var sampleAssignment = {
        'name': 'HW10',
        'desc': 'HW10 is blah blah blah',
        'pointsPossible': 10,
        'className': 'CSC309',
        'id' : 1
        };
    var sampleAssignment2 = {
        'name': 'HW20',
        'desc': 'HW20 Sucks',
        'pointsPossible': 30,
        'className': 'CSC309',
        'id' : 2
        };
    const sortedAssignemnts = [sampleAssignment, sampleAssignment2]

    return (
        <div className = 'todoFrame'>
            {sortedAssignemnts.map(assign =>{
            return <asgn key = {assign.id}>  
                    <div className = 'todoName'>{assign.name}</div>
                    <div className = 'todoClassName'>{assign.className}</div>
                    <div className = 'todoDesc'>{assign.desc}</div>
                    <div className = 'todoPointsPossible'>/{assign.pointsPossible}</div>
                </asgn>
            })}
       </div>
    )
}
