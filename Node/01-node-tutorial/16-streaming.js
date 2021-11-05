const {createReadStream} = require('fs')

const stream =createReadStream('./content/big.txt',
 {encoding: 'utf',
  highWaterMark: 1000,
})
stream.on('data', (result) => {
  console.log(result)
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
})

stream.on('error', (err) => {
  console.error(err);
  
})