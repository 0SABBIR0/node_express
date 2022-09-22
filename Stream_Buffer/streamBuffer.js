const http = require('http');
const { chunk } = require('lodash');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html><head><title>Form</title></head><body></html>');
        res.write('<body><form method="post" action="/process"><input type="text" name = "txtFile"></form></body>');
        res.end();
    }
    else if(req.url ==='/process' && req.method ==='POST') {
        const Message = [];
        req.on('data', (chunk) => {
            Message.push(chunk);
      });
      req.on('end', () => {
        console.log('Stream Finished');
        const CompleteMessage = Buffer.concat(Message).toString();
        console.log(CompleteMessage); 
      })
      res.write('Thank you...');
      res.end();
    }
    else{
        res.write('Not found');
        res.end();
    }
});
server.listen(3000);
console.log('Server listening on 3000 port');
