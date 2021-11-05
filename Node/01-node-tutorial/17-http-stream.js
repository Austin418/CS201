const http = require('http')
const fs = require('fs')

http
  .createServer()
  .on('request', (req, res) =>{
    const fileStream = fs.createReadStream('./content/index.html', "utf8")
    //pipe is a file stream that allows us to return a value to a server
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', () => {
      res.end(err)
    })
  })
  .listen(3000)