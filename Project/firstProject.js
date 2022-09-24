const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        const data = fs.readFileSync('home.html','utf-8');
        res.end(data);
    }
    else if(req.url === '/About'){
        const data = fs.readFileSync('about.html','utf-8');
        res.end(data);
    }
    else if(req.url === '/Contact'){
        const data = fs.readFileSync('contact.html','utf-8');
        res.end(data);
    }
    else if(req.url === '/Terms'){
        const data = fs.readFileSync('terms.html','utf-8');
        res.end(data);
    }
});
server.listen(3000);
console.log('Server run successful');