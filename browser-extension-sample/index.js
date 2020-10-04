
// Change the text of element given the elements Id and the new text
function changeElementText(id, newText) {
    document.getElementById(id).innerHTML = newText;
} 
// Adds element gievn the type of element, text, and 
function addElement(elementName, text, className, IdName, IdtoAppend)
{
    var node = document.createElement(elementName);                
    var textnode = document.createTextNode(text);         
    node.appendChild(textnode); 
    node.setAttribute("class", className);  
    node.setAttribute("id", IdName);           
    document.getElementById(IdtoAppend).appendChild(node);
}


changeElementText("task1", "Changed Text");

addElement("div", "NEW TASK", "task4", "task4", "left")
