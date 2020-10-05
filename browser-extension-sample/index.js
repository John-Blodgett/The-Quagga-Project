
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
function moveElement(elem, location)
{
    document.getElementById(location).appendChild(document.getElementById(elem) )
}


//Change the text of element with Id = "task1"
changeElementText("task1", "Changed Text");

// Adds a <div>NEW TASK</div> to the end of div with id = "left" and gives 
// it the styling of task4
addElement("div", "NEW TASK", "left", "task4")

