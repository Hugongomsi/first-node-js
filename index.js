const http = require("http");

let state = 10;

const server = http.createServer(handleRequest); // create server

function handleRequest(request, response) {
    console.log(request.url);
    if (request.url === "/state") {
        state
        response.writeHead(200, {'Content-Type': "plain/text"}); // declare the data type
        response.end( '10' );
    }
    else if (request.url === "/add") {
        state++
        response.writeHead(200, {'Content-Type': "plain/text"});
        response.end( 'OK');
     }
    else if (request.url === "/subtract") {
        state--;
        response.writeHead(200, {'Content-Type': "plain/text"});
        response.end('OK');
    }
    else if (request.url === "/reset") {
        state = 10;
        response.writeHead(200, {'Content-Type': "plain/text"});
        response.end( 'OK');
    }
    else if (request.url === "/bad") {
        response.writeHead(404, {'Content-Type': "plain/text"});
        response.end(" Not Found");
    }
}

server.listen(8080, function(error) {
    if (error) console.log(error);
    else console.log("Listening on port 8080...");
});