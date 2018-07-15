var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!哈哈");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


var fs = require('fs');

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束");

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err.stack);
        return;
    } 
    console.log(data.toString());
});
console.log("程序执行结束");