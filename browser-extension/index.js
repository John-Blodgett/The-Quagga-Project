
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
    var courseIdList = [];
    for (var i in jsonObject){
        if (jsonObject[i]["enrollment_term_id"] == enrollment_id){
            courseIdList.push(jsonObject[i]["id"])
        }
    }
    return (courseIdList);
}

// function getAssignmentObj(token, courseId){
//     var jsonObject = getRequest("https://canvas.calpoly.edu/api/v1/courses/" + courseId + "/assignments/", token)
//     return jsonObject
// }

async function getAssignmentObj(token, courseId) {
    return await getRequest("https://canvas.calpoly.edu/api/v1/courses/" + courseId + "/assignments/", token);
}


function getAssignmentAttr(item, attrib){
    return item[attrib]
}

// function getRequest(url, token){
//     var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//     var request = new XMLHttpRequest()
//     console.log(url)
//     request.open('GET', url, false)
//     request.setRequestHeader('Authorization', 'Bearer ' + token);
//     request.send();
//     if (request.status >= 200 && request.status < 400) {
//         var obj = JSON.parse(request.responseText);
//         return obj
//     } else {
//         console.log('error')
//     }
// }

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
        console.log(assignments[i])

        //unique Id creation per assignment
        asgnId = "asgn".concat(i.toString())
        descId = "desc".concat(i.toString())
        dotdotId = "dotdot".concat(i.toString())
        descBlockId = "descBlock".concat(i.toString())
        secId = "sec".concat(i.toString())

        //assignment properties
        name = getAssignmentAttr(assignments[i], "name")
        points_possible = getAssignmentAttr(assignments[i], "points_possible")
        description = getAssignmentAttr(assignments[i], "description")

        //Adding elements to html
        addElement("asgn", "", "assignFrame", null, asgnId)
        addElement("sec", `${name}`, asgnId, null, null)
        addElement("div", "", asgnId, "descAndScore", descId)
        addElement("div", "...", descId, "dotDotDot", dotdotId)
        addElement("div", "", dotdotId, "descriptionBlock", descBlockId)
        addElement("sec", "", descBlockId, null, secId)
        addElement("div", `${description}`, secId, "description")
        addElement("div", `-/${points_possible}`, descId, "score", null)
    }

}

window.onload = async function() {
    const token = "ShQIftCLxz12Us487VaWX1dtG0sFmElzw17N6qzmksa3M917MXsIzOwO87VscBq1"
    const enrollment_term = 38
    var classes = await getRequest("https://calpoly.instructure.com/api/v1/courses", token);
    var courseId = parseCourses(classes, enrollment_term)
    var assignments = []
    for (var i = 0; i < courseId.length; i++){
        var course = await getAssignmentObj(token, courseId[i])
        for (assignment of course)
            assignments.push(assignment)
    }
    
    addToDoAssignments(assignments)
}



