const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1 style="color:red;">This is Home Page </h1>');
        res.end();
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is about page</h1>');
        res.end();
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>404, Not Found</h1>');
        res.end();
    }
});

server.listen(3000);
console.log('Server run success');