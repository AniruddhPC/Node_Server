const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
      <head><title>My First Server</title></head>
      <body bgcolor="lightblue">
        <center>
          <font size="7" color="blue">Welcome!</font>
          <br><br>
          <table border="1">
            <tr>
              <td><a href="/about"><font size="5">About</font></a></td>
              <td><a href="/contact"><font size="5">Contact</font></a></td>
            </tr>
          </table>
        </center>
      </body>
      </html>
    `);
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
      <head><title>About Page</title></head>
      <body bgcolor="lightgreen">
        <center>
          <font size="6" color="green">About Me</font>
          <br><br>
          <ul>
            <li>My first Server</li>
            <li>Made with Node.js</li>
          </ul>
          <br>
          <a href="/"><font size="4">Click Here to Go Home</font></a>
        </center>
      </body>
      </html>
    `);
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
      <head><title>Contact Page</title></head>
      <body bgcolor="yellow">
        <marquee><font color="red">Welcome to Contact Page!</font></marquee>
        <center>
          <font size="6">Contact Me</font>
          <br><br>
          <table border="2">
            <tr>
              <td>Email:</td>
              <td>aniruddhpc340@gmail.com</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>8660228137</td>
            </tr>
          </table>
          <br>
        </center>
      </body>
      </html>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
      <head><title>Error Page</title></head>
      <body bgcolor="pink">
        <center>
          <font size="7" color="red">ERROR 404!</font>
          <br><br>
          <blink>Page Not Found</blink>
          <br><br>
          <a href="/"><font color="blue"><u>Go Back Home</u></font></a>
        </center>
      </body>
      </html>
    `);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
