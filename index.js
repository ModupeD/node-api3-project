// require your server and launch it
const server = require('./api/server')

const PORT = 5000

server.listen(PORT, (req,res) => {
   console.log('listening on', PORT)
})

module.exports = server;