const http = require('http');
const url = require('url');


const server = http.createServer((req,res) => {
    const myUrl = "https://www.torrentbd.com/hnr.php";
    const myUrlObj = url.parse(myUrl, true);

    const urlHostName = myUrlObj.host;
    const urlPathName = myUrlObj.pathname;
    const urlQuery = myUrlObj.search;

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`<h1>${urlHostName}</h1>`);
    res.end();
});
server.listen(3000);
console.log('Server Run Successfully');