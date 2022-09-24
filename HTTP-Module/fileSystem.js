const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        fs.writeFile('Demo.txt','Hello Programmers!',(error) => {
            if(error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('No File');
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write('File Write Sucess');
                res.end();
            }
        });
      /*
        fs.readFile('index.html', (error, data) => {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
        */
    }
});
server.listen(3000);
console.log('Server run successfully');