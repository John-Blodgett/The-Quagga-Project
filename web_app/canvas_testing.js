
// var url = "https://canvas.calpoly.edu/"

// function httpGet(url)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", url); 
//     xmlHttp.send();
//     return xmlHttp.responseText;
// }

// httpGet(url)

var label= document.createElement("label");
var description = document.createTextNode(pair);
var checkbox = document.createElement("input");

checkbox.type = "checkbox";    // make the element a checkbox
checkbox.name = "slct[]";      // give it a name we can check on the server side
checkbox.value = pair;         // make its value "pair"

label.appendChild(checkbox);   // add the box to the element
label.appendChild(description);// add the description to the element

// add the label element to your div
document.getElementById('some_div').appendChild(label);
