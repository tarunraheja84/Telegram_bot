

const io = require('socket.io')(5000, {
    cors : '*'
  });

module.exports = io;
