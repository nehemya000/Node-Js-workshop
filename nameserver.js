var http = require(`http`);

http.createServer(function(req, res){
res.writeHead(200,{'content-Type':'text/html'});
res.end("welcome to <br/> Node JS");
})
console.log("Server is listening on http://127.0.0.1:3000");