const fs = require('fs');
const readStream = fs.createReadStream(`${__dirname}/hello.txt`);

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});