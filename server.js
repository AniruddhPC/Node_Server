const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '';
  let contentType = 'text/html';

  if (req.url === '/' || req.url === '/home') {
    filePath = path.join(__dirname, 'index.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about-us.html');
  } else if (req.url === '/contact') {
    filePath = path.join(__dirname, 'contact-us.html');
  } else if (req.url.endsWith('.css')) {
    filePath = path.join(__dirname, req.url);
    contentType = 'text/css';
  } else if (req.url.match(/\.(jpg|jpeg)$/)) {
    filePath = path.join(__dirname, req.url);
    contentType = 'image/jpeg';
  } else if (req.url.endsWith('.png')) {
    filePath = path.join(__dirname, req.url);
    contentType = 'image/png';
  } else if (req.url.endsWith('.gif')) {
    filePath = path.join(__dirname, req.url);
    contentType = 'image/gif';
  } else {
    filePath = path.join(__dirname, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.readFile(filePath, (err, data) => {
      res.end(data);
    });
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
