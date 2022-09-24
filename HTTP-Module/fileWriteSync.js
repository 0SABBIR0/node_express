const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        const error = fs.writeFileSync('demoSync','Hello World');
        if(error){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Read Not Success');
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('File Read Success');
            res.end();
        }
    }
});
server.listen(3000);
console.log('Server Run Success');