import React from 'react';
import './Todo.css';
import { useState, useEffect } from 'react';
import { parseCourses, parseCoursesId, parseDueDate, changeUrl, getRequest, getAssignmentObj} from '../../Functions.js'
import Tags from './Tags.js'
import SortBy from '../../components/SortBy'
import HamburgerIcon from '../../images/Hamburger_icon.png'

async function sortAndSet(courseId, tokStr, setAllCourseAssn, courseNames) {
    let temparr = []
    const sortByDataToDoAssignments = {}
    for (var i = 0; i < courseId.length; i++) {
        let res = await getAssignmentObj(tokStr, courseId[i]);
        for (let data of res.data) {
            temparr.push(data);
        }
    }
    for (var j = 0; j < temparr.length; j++){
        temparr[j]['course'] = courseNames[temparr[j]['course_id']]
    }


    const toDoAssignments = temparr.filter((ele) => {
        let d1 = new Date(ele.due_at);
        let d2 = Date.now();
        return (d1 - d2) > 0;
    });
    sortByDataToDoAssignments.original = toDoAssignments.sort((ele1, ele2) => {
        let d1 = new Date(ele1.due_at);
        let d2 = new Date(ele2.due_at);
        return d1 - d2;
    });

    var firstcopy = JSON.parse(JSON.stringify(toDoAssignments));
    var seccopy = JSON.parse(JSON.stringify(toDoAssignments));

    sortByDataToDoAssignments.sortByPointValue = firstcopy.sort((ele1, ele2) => { 
        let pv1 = ele1.points_possible;
        let pv2 = ele2.points_possible;
        return pv2 - pv1;
    })

    sortByDataToDoAssignments.sortbyClass = seccopy.sort((ele1, ele2) => { 
        let c1 = ele1.course_id;
        let c2 = ele2.course_id;
        return c2 - c1;
    })
    setAllCourseAssn(sortByDataToDoAssignments);
    return sortByDataToDoAssignments;
}




export default function Todo() {
    const [allCourseAssn, setAllCourseAssn] = useState({original: []});
    const [curCourseAssn, setCurCourseAssn] = useState([])
    const [showSortBy, setShowSortBy] = useState(false)
    const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'SchoolToDoLocalStorageKey';
    const tokStr = 'ShQIftCLxz12Us487VaWX1dtG0sFmElzw17N6qzmksa3M917MXsIzOwO87VscBq1';
    
    useEffect(() => {
        const schoolToDoLoadedFromLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS));
        if (schoolToDoLoadedFromLS) {
            setAllCourseAssn(schoolToDoLoadedFromLS);
            setCurCourseAssn(schoolToDoLoadedFromLS.original)
        }
            
        getRequest(`/api/v1/courses`, tokStr)
            .then(async (res) => {
                const classes = res.data;
                const enrollment_term = 139;
                var courseIdArr = parseCoursesId(classes, enrollment_term);
                const courseNames = parseCourses(classes, enrollment_term)
                let sortByDataToDoAssignments = await sortAndSet(courseIdArr, tokStr, setAllCourseAssn, courseNames);
                localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(sortByDataToDoAssignments));
                setAllCourseAssn(schoolToDoLoadedFromLS)
            });
    }, []) 

    return (
        
        <div className = 'todoFrame'>
            <div> 
                <div className = 'topBar'> Upcoming Assignments 
                <img src={HamburgerIcon} onClick={() => setShowSortBy(!showSortBy)} alt="Hamburger" className="web-ham-icon"></img> 
                </div>
                {showSortBy ? <SortBy setCurCourseAssn={setCurCourseAssn} allCourseAssn={allCourseAssn}/> : null}
            </div>
            {curCourseAssn.map(assign =>{
                const dueDate = parseDueDate(assign.due_at);
                const url = changeUrl(assign.html_url)
            return <div key = {assign.id}>  
                        <div className = 'allAssignInfo'>
                            <div className = 'todoName'>{assign.name}</div>
                            <div className = 'otherInfo'>
                                <div className = 'todoPointsPossible'>/{assign.points_possible}</div>
                                <div className = 'dueAt'>Due: {dueDate}</div>
                                <div className = 'todoClassName'>{assign.course}</div>
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
