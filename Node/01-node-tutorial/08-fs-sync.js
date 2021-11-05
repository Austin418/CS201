const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', "utf-8")
const second = readFileSync('./content/second.txt', "utf-8")


writeFileSync(
  "./content/sync-result.txt",
    `Here is the result \n ${first}, \n ${second}`,
    { flag: 'a' }
)
console.log(second)
console.log('finished');
console.log(first)