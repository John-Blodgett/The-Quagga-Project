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

async function onLoad() {
    const token = "15279~B0TjXFSN3Hagi0Gc7Fp4zmydisNrsAeBm6ZM6dvPQWmggrGonRy1Hs2m48INEEJb";
    var classes = await getRequest("https://calpoly.instructure.com/api/v1/courses", token);
}

window.onload = onLoad();
