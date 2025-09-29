const http=require('http')

const server=http.createServer((req,res)=>{
  if(req.url === '/home' || req.url==='/')
  {
    res.writeHead(200,{'contentType':"text/html"})
    res.write(
    `<html>
      <head>
      <title>MY server</title>
      </head>
    <body bgcolor="red">
      <p>My first server using node.js</p>
      </body>
      </html>`
    )
  }
  else if(req.url === '/about')
  {
    res.writeHead(200,{'contentType':'"text/html"'})
    res.write(
    `<html>
    <body bgcolor="red">
      <p>My about page</p>
      </body>
      </html>`
    )
  }
  else if(req.url === '/contact')
  {
    res.writeHead(200,{'contentType':'"text/html"'})
    res.write(
    `<html>
    <body bgcolor="red">
      <p>My contact page</p>
      </body>
      </html>`
    )
  }
})
  

  const PORT=3000
  server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
  });