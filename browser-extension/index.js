
// Change the text of element given the elements Id and the new text
function changeElementText(id, newText) {
    document.getElementById(id).innerHTML = newText;
} 

// Adds element given the type of element, text, the Id of the element to append
// and options to set a class and Id for the new element
function addElement(elementName, text, IdtoAppend, className = null, IdName = null,)
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
    var courseIdList = [];
    for (var i in jsonObject){
        if (jsonObject[i]["enrollment_term_id"] == enrollment_id){
            courseIdList.push(jsonObject[i]["id"])
        }
    }
    return (courseIdList);
}

function getAssignmentObj(token, courseId){
    var jsonObject = getRequest("https://canvas.calpoly.edu/api/v1/courses/" + courseId + "/assignments/", token)
    return jsonObject
}

function getAssignmentAttr(jsonObject, attrib){
    attribArr = []
    for (var i in jsonObject){
        console.log(jsonObject[i][attrib])
        attribArr.push(jsonObject[i][attrib])
    }
    return attribArr
}

function getRequest(url, token){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest()
    console.log(url)
    request.open('GET', url, false)
    request.setRequestHeader('Authorization', 'Bearer ' + token);
    request.send();
    if (request.status >= 200 && request.status < 400) {
        var obj = JSON.parse(request.responseText);
        return obj
    } else {
        console.log('error')
    }

}

function addToDoAssignments(assignList){
    for (var i = 0; i < 4; i++){

        //unique Id creation per assignment
        asgnId = "asgn".concat(i.toString())
        descId = "desc".concat(i.toString())
        dotdotId = "dotdot".concat(i.toString())
        descBlockId = "descBlock".concat(i.toString())
        secId = "sec".concat(i.toString())

        //assignment properties
        // name = assignList[i]["name"]
        // points_possible = assignList[i]["points_possible"]

        name = "Assignment ".concat((i+2).toString())
        console.log(name)

        //Adding elements to html
        addElement("asgn", "", "assignFrame", null, asgnId)
        addElement("sec", name, asgnId, null, null)
        addElement("div", "", asgnId, "descAndScore", descId)
        addElement("div", "...", descId, "dotDotDot", dotdotId)
        addElement("div", "", dotdotId, "descriptionBlock", descBlockId)
        addElement("sec", "", descBlockId, null, secId)
        addElement("div", "description", secId, "description")
        addElement("div", "-/-", descId, "score", null)
    }

}

window.onload = function(){
    // const token = "ShQIftCLxz12Us487VaWX1dtG0sFmElzw17N6qzmksa3M917MXsIzOwO87VscBq1"
    // const enrollment_term = 38
    // var obj = getRequest("https://calpoly.instructure.com/api/v1/courses", token)
    // var courseId = parseCourses(obj, enrollment_term)
    // var list = []
    // for (var i = 0; i < courseId.length; i++){
    //     var obj2 = getAssignmentObj(token, courseId[i])
    //     list.append(obj2)
    //     var name = getAssignmentAttr(obj2, "name")
    //     // getAssignmentAttr(obj2, "points_possible")
    //     // getAssignmentAttr(obj2, "description")
    // }
    
    addToDoAssignments(name)
}



