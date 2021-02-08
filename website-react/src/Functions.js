import axios from 'axios';

export function parseCourses(jsonObject, enrollment_id){
    var courseList = [];
    for (var i in jsonObject){
        if (jsonObject[i]["enrollment_term_id"] === enrollment_id){
            courseList.push(jsonObject[i])
        }
    }
    return (courseList);
}

export function parseCoursesId(jsonObject, enrollment_id){
    var courseIdList = [];
    for (var i in jsonObject){
        if (jsonObject[i]["enrollment_term_id"] === enrollment_id){
            courseIdList.push(jsonObject[i]["id"])
        }
    }
    return (courseIdList);
}

export function parseDueDate(dueDate){
    return dueDate.slice(5,10) + "-" + dueDate.slice(0,4)
}

export function changeUrl(url){
    return 'https://canvas.calpoly.edu' + url.slice(22)
}

export async function getRequest(url, tokStr){
    const response =  axios.get(url,
    {headers : {'Access-Control-Allow-Origin': '*',
                'Authorization' : 'Bearer ' + tokStr}})
    return response
}

export async function getAssignmentObj(token, courseId) {
    return await getRequest("/api/v1/courses/" + courseId + "/assignments/", token);
}

///users/self/graded_submissions?include[]=total_scores
export async function getRecentlyCompleted(token) {
    return await getRequest("/api/v1/users/self/graded_submissions?include[]=course&include[]=assignment", token);
}

//Parse the JSON object .data of recently completed
export function parseRecentlyCompleted(jsonObject){
    var gradedList = [];
    for (var i in jsonObject){

        var obj = { course: jsonObject[i]["course"]["id"],
                    assignment_id: jsonObject[i]["assignment_id"],
                    assignment_name: jsonObject[i]["assignment"]["name"],
                    entered_score: jsonObject[i]["entered_score"],
                    points_possible: jsonObject[i]["assignment"]["points_possible"]}

        gradedList.push(obj);

    }
    return (gradedList);
}

