const http = require('http')

http
  .createServer((req, res) => {
    res.write('Hello CircleCI edited')
    res.end()
  })
  .listen(3000, '0.0.0.0')
