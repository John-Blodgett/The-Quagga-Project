// Change the text of element given the elements Id and the new text
function changeElementText(id, newText) {
    document.getElementById(id).innerHTML = newText;
} 

// Adds element given the type of element, text, the Id of the element to append
// and options to set a class and Id for the new element
function addElement(elementName, text, IdtoAppend, className = null, IdName = null, other = null)
{
    var node = document.createElement(elementName);                
    var textnode = document.createTextNode(text);         
    node.appendChild(textnode);        
    document.getElementById(IdtoAppend).appendChild(node);
    if (className)
        {node.setAttribute("class", className);}  
    if (IdName)
        {node.setAttribute("id", IdName);}  
    if (other)
        {node.setAttribute(other[0], other[1]);}  
    return node
}

//Move element to the end of target element
//Moving ToDo tasks to Completed section after checking them off
function moveElement(elem, location)
{
    document.getElementById(location).appendChild(document.getElementById(elem) )
}

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


function addAssignments(assignments, frameId){
    for (let i = 0; i < assignments.length; i++){

        //unique Id creation per assignment
        let asgnId = frameId[0] + "asgn".concat(i.toString());
        let descId = frameId[0] + "desc".concat(i.toString());
        let dotdotId = frameId[0] +"dotdot".concat(i.toString());
        let descBlockId = frameId[0] +"descBlock".concat(i.toString());
        let secId = frameId[0] +"sec".concat(i.toString());
        let linkId = frameId[0] +"link".concat(i.toString());
        let descripId = frameId[0] +"descrip".concat(i.toString());

        //assignment properties
        let name = getAssignmentAttr(assignments[i], "name");
        let points_possible = getAssignmentAttr(assignments[i], "points_possible");
        let description = getAssignmentAttr(assignments[i], "description");
        let html_url = getAssignmentAttr(assignments[i], "html_url");
        let course_name = getAssignmentAttr(assignments[i], "course_name");
        
        addElement("asgn", "", frameId, null, asgnId);
        addElement("sec", `${name}`, asgnId, null, null);
        addElement("div", "", asgnId, "descAndScore", descId);
        addElement("div", "...", descId, "dotDotDot", dotdotId);
        addElement("div", "", dotdotId, "descriptionBlock", descBlockId);
        addElement("sec", "", descBlockId, null, secId, secId);
        addElement("div", `Description`, secId, "description");
        addElement("div", `Course: ${course_name}`, secId, "className");
        addElement("a", `Link`, secId, linkId, linkId, ["href",`${html_url}`]);
        document.getElementById(linkId).href = html_url;
        addElement("div", "", secId, "description", descripId)
        changeElementText(descripId, description)
        addElement("div", `-/${points_possible}`, descId, "score", null);
    }
}

function reloadAssignments(newAssignments, frame) {
    var assignments = document.getElementById(frame);
    
    while (assignments.firstChild) {
        assignments.removeChild(assignments.firstChild);
    }

    addAssignments(newAssignments, frame);
}

function addClassesToDropdown(classes){
    for (var i = 0; i < classes.length; i++){
        let name = getAssignmentAttr(classes[i], "name")
        var id = getAssignmentAttr(classes[i], "id")
        var node = addElement("a", parseClassNameForDropdown(name), "dropdown-content", null, id, ["a", "#"])
        node.onclick = function() { reloadAssignments(sortedAssignments[parseClassNameForDropdown(name)], 'todoFrame'); console.log(parseClassNameForDropdown(name));};
    }
}

function parseClassNameForDropdown(rawClassName) {
    var classNameArr = rawClassName.split('-')
    return classNameArr[0] + '-' + classNameArr[1] // [CSC,308,03,2208 , Software Engineering I]
}

function presetSort(assignments, courses) {
    var sortedAssignments = {};
   
    const toDoAssignments = assignments.filter((ele) => {
        let d1 = new Date (ele.due_at);
        let d2 = Date.now();
        return (d1 - d2) > 0;
    });

    const completedAssignments = assignments.filter((ele) => {
        let d1 = new Date (ele.due_at);
        let d2 = Date.now();
        return (d1 - d2) <= 0;
    });

    const sortCompleted = completedAssignments.sort((ele1, ele2) => { 
        let d1 = new Date (ele1.due_at);
        let d2 = new Date (ele2.due_at);
        return d2 - d1;
    })
    var firstcopy = JSON.parse(JSON.stringify(toDoAssignments));
    var seccopy = JSON.parse(JSON.stringify(toDoAssignments));

    const sortByDueDate = firstcopy.sort((ele1, ele2) => { 
        let d1 = new Date (ele1.due_at);
        let d2 = new Date (ele2.due_at);
        return d2 - d1;
    })

    const sortByPointValue = seccopy.sort((ele1, ele2) => { 
        let pv1 = ele1.points_possible;
        let pv2 = ele2.points_possible;
        return pv2 - pv1;
    })


    for (let course of courses) {
        name = getAssignmentAttr(course, "name");
        sortedAssignments[parseClassNameForDropdown(name)] = toDoAssignments.filter(ele => ele.course_name == name);
    }

    sortedAssignments.original = assignments;
    sortedAssignments.toDo = toDoAssignments;
    sortedAssignments.byDueDate = sortByDueDate;
    sortedAssignments.byPointValue = sortByPointValue;
    sortedAssignments.recentlyCompleted = sortCompleted;
    return sortedAssignments;
}


import Token from './token.js';
var sortedAssignments;
const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'assignments:D';

window.onload = async function() {
    const token = Token.Token;
    const enrollment_term = 38;
    const assignmentsLoadedFromLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS));
    if (assignmentsLoadedFromLS) {
        addAssignments(assignmentsLoadedFromLS.toDo, "todoFrame");
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
    sortedAssignments = presetSort(assignments, coursesOfCurrentTerm);
    reloadAssignments(sortedAssignments.toDo, 'todoFrame');
    reloadAssignments(sortedAssignments.recentlyCompleted, 'completedFrame')
    localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(sortedAssignments));
    addClassesToDropdown(coursesOfCurrentTerm)
    // ask about creting lists before loading
}

var checkboxDueDate = document.querySelector("input[value=DueDate]");
checkboxDueDate.addEventListener('change', function() {
    console.log(sortedAssignments)
    if(this.checked) {
        reloadAssignments(sortedAssignments.byDueDate, 'todoFrame');
        checkboxAssignmentPoints.checked = false;
        checkboxClass.checked = false;
    } else {
        reloadAssignments(sortedAssignments.byDueDate, 'todoFrame');
    }
});

var checkboxAssignmentPoints = document.querySelector("input[value=AssignmentPoints]");
checkboxAssignmentPoints.addEventListener('change', function() {
    if(this.checked) {
        reloadAssignments(sortedAssignments.byPointValue, 'todoFrame');
        checkboxDueDate.checked = false;
        checkboxClass.checked = false;
    } else {
        reloadAssignments(sortedAssignments.byDueDate, 'todoFrame');
    }
});

var checkboxClass = document.querySelector("input[value=Class]");
checkboxClass.addEventListener('change', function() {
    if(this.checked) {
        reloadAssignments(sortedAssignments.toDo, 'todoFrame');
        checkboxDueDate.checked = false;
        checkboxAssignmentPoints.checked = false;
    } else {
        reloadAssignments(sortedAssignments.byDueDate, 'todoFrame');
    }
});