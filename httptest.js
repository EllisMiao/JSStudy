'use strict';

//导入http模块
var http = require('http');

var server = http.createServer(function (request,response){
    //回掉函数接受request和response
    console.log(request.method+':'+request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello world</h1>');
});

server.listen(8081);

console.log('Server is run');

//var url = require('url');
//console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));