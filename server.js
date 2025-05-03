import http from 'http';
import fs from 'fs';
import path from 'path';
const PORT = process.env.PORT;

const server = http.createServer(async(req, res) =>
{
    if(req.url === "/index.html" || req.url === "/")
    {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => 
        {
            if(err)
            {
                res.writeHead(500);
                return res.end("Error, can not load index.html");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    }
    else if(req.url === "/script.js")
    {
        fs.readFile(path.join(__dirname, "script.js"), (err, data) => 
        {
            if(err)
            {
                res.writeHead(500);
                return res.end("Error, can not load script.js");
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    }
    else
    {
        res.writeHead(404);
        res.end("Not found");
    }
});

server.listen(PORT, () => 
{
    console.log(`Server running on port ${PORT}`);
});


