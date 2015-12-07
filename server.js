var http = require("http");
var fs = require("fs");

function badRequest(response){
    response.writeHead(404, {"content-type" : "text/plain"});
    response.write("404 : Page Not Found");
    response.end();
}

function onRequest(request , response){
    if(request.method == "GET" && request.url == "/"){
        response.writeHead(200, {"content-type" : "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        badRequest(response);
    }
}

http.createServer(onRequest).listen("8888");
console.log("The server is created");