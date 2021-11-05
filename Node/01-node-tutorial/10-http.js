const http = require('http')
const os = require('os')
const user = os.userInfo()

const data = {
  names: [
    'jimmy', 'john', 'tommy'
  ],
  date: '10/20/30',
  numbers:[1,2,3,4,5,6,7,8]
}

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    console.log(`${user.username} was here`);
  res.end('welcome to the home page')
  }else if (req.url === '/about'){
    res.end('here is the history of my people')
  } else if(req.url ==='/data'){
    res.end(JSON.stringify(data))
    }else{
    res.end(`

    <h1> OOps!</h1>
    <p>We cant find what your looking for</p>`)
  }
})

server.listen(5000)