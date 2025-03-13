const obj = { 
    counter : 0 
};

// if (someCondition) {
//     obj.counter = 1;
// }

/************************************************************** */

const req = { 
    url: "https://example.com", 
    method: "GET" as "GET"
};

handleRequest(req.url, req.method as "GET" | "POST");

function handleRequest(url : string, method : "GET" | "POST") {
    console.log(`${method} request to ${url}`);
}

