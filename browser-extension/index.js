// Change the text of element given the elements Id and the new text
function changeElementText(id, newText) {
    document.getElementById(id).innerHTML = newText;
} 

// Adds element given the type of element, text, the Id of the element to append
// and options to set a class and Id for the new element
function addElement(elementName, text, IdtoAppend, className = null, IdName = null)
{
    var node = document.createElement(elementName);                
    var textnode = document.createTextNode(text);         
    node.appendChild(textnode);        
    document.getElementById(IdtoAppend).appendChild(node);
    if (className)
        {node.setAttribute("class", className);}  
    if (IdName)
        {node.setAttribute("id", IdName);}  
}

//Move element to the end of target element
//Moving ToDo tasks to Completed section after checking them off
function moveElement(elem, location)
{
    document.getElementById(location).appendChild(document.getElementById(elem) )
}


//Change the text of element with Id = "task1"
// changeElementText("task1", "Changed Text");

// Adds a <div>NEW TASK</div> to the end of div with id = "left" and gives 
// it the styling of task4
// addElement("div", "NEW TASK", "left", "task4")

//Creates the functionality to trigger a function upon opening an extension, can also use document.onload if necessary
//window.onload = function(){
//yourfunction(param1,param2,....)
//}

function parseCourses(jsonObject, enrollment_id){
    var courseList = [];
    for (var i in jsonObject){
        if (jsonObject[i]["enrollment_term_id"] == enrollment_id){
            courseList.push(jsonObject[i])
        }
    }
    return (courseList);
}

function parseCoursesId(jsonObject, enrollment_id){
    var courseIdList = [];
    for (var i in jsonObject){
        if (jsonObject[i]["enrollment_term_id"] == enrollment_id){
            courseIdList.push(jsonObject[i]["id"])
        }
    }
    return (courseIdList);
}


async function getAssignmentObj(token, courseId) {
    return await getRequest("https://canvas.calpoly.edu/api/v1/courses/" + courseId + "/assignments/", token);
}


function getAssignmentAttr(item, attrib){
    return item[attrib]
}

async function getRequest(url, token) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


function addToDoAssignments(assignments){
    for (let i = 0; i < assignments.length; i++){

        //unique Id creation per assignment
        let asgnId = "asgn".concat(i.toString());
        let descId = "desc".concat(i.toString());
        let dotdotId = "dotdot".concat(i.toString());
        let descBlockId = "descBlock".concat(i.toString());
        let secId = "sec".concat(i.toString());
        let linkId = "link".concat(i.toString());

        //assignment properties
        let name = getAssignmentAttr(assignments[i], "name");
        let points_possible = getAssignmentAttr(assignments[i], "points_possible");
        let description = getAssignmentAttr(assignments[i], "description");
        let html_url = getAssignmentAttr(assignments[i], "html_url");
        let course_name = getAssignmentAttr(assignments[i], "course_name");

        //Adding elements to html
        addElement("asgn", "", "assignFrame", null, asgnId);
        addElement("sec", `${name}`, asgnId, null, null);
        addElement("div", "", asgnId, "descAndScore", descId);
        addElement("div", "...", descId, "dotDotDot", dotdotId);
        addElement("div", "", dotdotId, "descriptionBlock", descBlockId);
        addElement("sec", "", descBlockId, null, secId, secId);
        addElement("div", `Description`, secId, "description");
        addElement("div", `Course: ${course_name}`, secId, "className");
        addElement("a", `${html_url}`, secId, linkId, linkId);
        document.getElementById(linkId).href = html_url;
        addElement("div", `-/${points_possible}`, descId, "score", null);
    }
}

function reloadAssignments(newAssignments) {
    var assignments = document.getElementById('assignFrame');
    
    while (assignments.firstChild) {
        assignments.removeChild(assignments.firstChild);
    }

    addToDoAssignments(newAssignments);
}

function presetSort(assignments) {
    var sortedAssignments = {};
    const toDoAssignments = assignments.filter((ele) => {
        let d1 = new Date (ele.due_at);
        let d2 = Date.now();
        return (d1 - d2) > 0;
    });

    const sortByDueDate = toDoAssignments.sort((ele1, ele2) => { 
        let d1 = new Date (ele1.due_at);
        let d2 = new Date (ele2.due_at);
        return d1 - d2;
    })

    // const sortByPointValue = toDoAssignments.sort((ele1, ele2) => { 
    //     code...
    // })

    sortedAssignments.original = assignments;
    sortedAssignments.toDo = toDoAssignments;
    sortedAssignments.byDueDate = sortByDueDate;
    return sortedAssignments;
}

import Token from './token.js';
const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'assignments:D';

window.onload = async function() {
    const token = Token.Token;
    const enrollment_term = 38;
    const assignmentsLoadedFromLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS));
    if (assignmentsLoadedFromLS) {
        addToDoAssignments(assignmentsLoadedFromLS.toDo);
    }

    var classes = await getRequest("https://calpoly.instructure.com/api/v1/courses", token);
    var coursesOfCurrentTerm = parseCourses(classes, enrollment_term);
    var courseId = parseCoursesId(classes, enrollment_term);
    var assignments = [];

    for (var i = 0; i < courseId.length; i++){
        var course = await getAssignmentObj(token, courseId[i]);
        for (let assignment of course) {
            assignment.course_name = coursesOfCurrentTerm[i].name;
            assignments.push(assignment);
        }
    }

    let sortedAssignments = presetSort(assignmentsLoadedFromLS);
    reloadAssignments(sortedAssignments.toDo);
    localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(sortedAssignments));
}
