var connect = require("connect");
var http = require("http");

var app = connect();

function homePage(request, response, next){
    console.log("This is the home page");
    next();
}

function aboutPage(request, response, next){
    console.log("This is the about page");
    next();

}

//app.use("/home" , homePage);
//app.use("/about", aboutPage);

app.use(homePage);
app.use(aboutPage);

http.createServer(app).listen("8888");
console.log("The server is created");