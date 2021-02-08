import React from 'react';
import './Todo.css';
import { useState, useEffect } from 'react';
import { parseCourses, parseCoursesId, parseDueDate, changeUrl, getRequest, getAssignmentObj} from '../Functions.js'
import Tags from './Tags'

async function sortAndSet(courseId, tokStr, setAllCourseAssn) {
    let temparr = []

    for (var i = 0; i < courseId.length; i++) {
        let res = await getAssignmentObj(tokStr, courseId[i]);
        console.log(res);
        for (let data of res.data) {
            temparr.push(data);
        }
    }

    const toDoAssignments = temparr.filter((ele) => {
        let d1 = new Date(ele.due_at);
        let d2 = Date.now();
        return (d1 - d2) > 0;
    });
    const sortByDataToDoAssignments = toDoAssignments.sort((ele1, ele2) => {
        let d1 = new Date(ele1.due_at);
        let d2 = new Date(ele2.due_at);
        return d1 - d2;
    });
    setAllCourseAssn(sortByDataToDoAssignments);
    return sortByDataToDoAssignments;
}


export default function Todo() {
    const [allCourseAssn, setAllCourseAssn] = useState([]);
    const [courseIdNamePairs, setcourseIdNamePAirs] = useState({});
    const [numClasses, setNumClasses] = useState(10);

    const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'SchoolToDoLocalStorageKey';
    const tokStr = 'ShQIftCLxz12Us487VaWX1dtG0sFmElzw17N6qzmksa3M917MXsIzOwO87VscBq1';
    
    useEffect(() => {
        const schoolToDoLoadedFromLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS));
        if (schoolToDoLoadedFromLS) {
            setAllCourseAssn(schoolToDoLoadedFromLS);
        }
            
        getRequest(`/api/v1/courses`, tokStr)
            .then(async (res) => {
                const classes = res.data;
                const enrollment_term = 139;
                var courseId = parseCoursesId(classes, enrollment_term);
                setNumClasses(courseId.length);
                let sortByDataToDoAssignments = await sortAndSet(courseId, tokStr, setAllCourseAssn);
                console.log("set");
                console.log(`sortByDataToDoAssignments ${sortByDataToDoAssignments}`);
                localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(sortByDataToDoAssignments));
            });
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
