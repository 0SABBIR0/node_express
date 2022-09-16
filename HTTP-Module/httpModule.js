const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('Hello Mothafucka I am learning the fucking NODE JS');    
    res.end();
});

server.listen(3000);
console.log("listening on port 3000");