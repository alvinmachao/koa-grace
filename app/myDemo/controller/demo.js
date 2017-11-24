var fs = require('fs')
fs.open('message.txt', 'r', (err, fd) => {
        if (err) {
            console.log('error')
            console.log(err)
        }
        console.log(fd)
    }
)
fs.appendFile('message.txt', 'sss', (err) => {
    console.log(err);
})
fs.readFile('message.txt',function (err,data) {
    console.log(data)
})