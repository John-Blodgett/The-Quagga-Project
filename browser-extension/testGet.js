var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

var token = 'INSERTTOKENHERE'

request.open('GET', 'https://calpoly.instructure.com/api/v1/courses', true)

request.setRequestHeader('Authorization', 'Bearer ' + token);

request.onload = function () {

    console.log(request.status)

    if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);
    } else {
        console.log('error')
      }

}

request.send()