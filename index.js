const http = require('http')

http
  .createServer((req, res) => {
    res.write(JSON.stringify({ status: 'OK' }))
    res.end()
  })
  .listen(3000, '0.0.0.0')
