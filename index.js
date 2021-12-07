// require your server and launch it
const server = require('./api/server')
const { logger } = require('./api/middleware/middleware')
const PORT = 5000
server.use(logger)

server.listen(PORT, (req,res) => {
   console.log('listening on', PORT)
})

module.exports = server;