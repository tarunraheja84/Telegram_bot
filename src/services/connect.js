const giveInfo = require('../utils/giveInfo');
const io = require('../utils/io');
const sendMessage = require('../utils/sendMessage');

const connect = (data) => {
    io.on('connection', (socket) => {
        socket.emit('show_user', { userName: data.userName, chatId: data.chatId});
    });
    sendMessage(data.bot, data.chatId, "Telegram details sent to flavrFood.")
    giveInfo(data.bot, data.optionId, "Type anything to continue.")
}

module.exports = connect;