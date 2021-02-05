import React from 'react';
import './Todo.css';
import { useState, useEffect } from 'react';
import { parseCourses, parseCoursesId, parseDueDate, changeUrl, getRequest, getAssignmentObj} from '../Functions.js'
import Tags from './Tags'

export default function Todo() {
    
    const [allCourseAssn, setAllCourseAssn] = useState([]);
    
    const [courseIdNamePairs, setcourseIdNamePAirs] = useState({});
    const [numClasses, setNumClasses] = useState(10);
    const temparr = []

    const tokStr = 'ShQIftCLxz12Us487VaWX1dtG0sFmElzw17N6qzmksa3M917MXsIzOwO87VscBq1'
    useEffect(()=>{
            getRequest(`/api/v1/courses`, tokStr)
            .then(res => {
            const classes = res.data;
            const enrollment_term = 139;
            var courseId = parseCoursesId(classes, enrollment_term);
            setNumClasses(courseId.length)
            for (var i = 0; i < courseId.length; i++){
                getAssignmentObj(tokStr, courseId[i])
                .then(res => {
                    for (let assn of res.data)
                        {
                            temparr.push(assn)
                        }})
                        if (i === (courseId.length -1))
                        {
                            setAllCourseAssn(temparr)};
                }})
                .catch(function (error){
                    console.log(error)
                })
         }, []) 

    return (
        <div className = 'todoFrame'>
            {allCourseAssn.map(assign =>{
                const dueDate = parseDueDate(assign.due_at);
                const url = changeUrl(assign.html_url)
            return <div key = {assign.id}>  
                        <div className = 'allAssignInfo'>
                            <div className = 'todoName'>{assign.name}</div>
                            <div className = 'otherInfo'>
                                <div className = 'todoPointsPossible'>/{assign.points_possible}</div>
                                <div className = 'dueAt'>Due: {dueDate}</div>
                                <div className = 'todoClassName'>{courseIdNamePairs[assign.course_id]}</div>
                                <a className = 'See More' href={url}>See more</a>
                                <div className = 'tagInfo'>
                                <Tags></Tags>
                                </div>
                                
                            </div>
                        </div>
                        

                </div>
            })}
       </div>
    )
}
