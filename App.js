var http = require('http');
var hostname = require('127.0.0.1');//localhost
const res = require('express/lib/response');
var port = 3000;
var server = http.createServer((req, res)) ==> {
    res.statusCode = 200;
    //Cabeçalho
    res.setHeader('Content-tpe', 'text/html');
    server.listen(port, hostname, () =>{
        console.log("Servidor esta rodando" + hostname + ":" + port);
    });
})