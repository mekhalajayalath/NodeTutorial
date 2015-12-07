var http = require("http");

function onRequest(request , response){
    console.log("The user made a call" + request.url);
    response.writeHead(200, {"content-type" : "text/plain"});
    response.write("Here is some data");
    response.end();
    console.log("response sent");

}

http.createServer(onRequest).listen("8888");
console.log("The server is created");