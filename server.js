const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(__dirname, 'public', file);
    
    fs.readFile(
        filePath,
        (err, content) => {
            try {
                if (err) throw err;
                res.end(content);
            } catch (error) {
                console.error(error);
                res.statusCode = 404;
                res.end();
            }
        }
    );
}).listen(5000, () => console.log('Server is running...'));