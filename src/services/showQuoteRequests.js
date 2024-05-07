const sendMessage = require('../utils/sendMessage.js');

const showQuoteRequests = (data) =>{
    sendMessage(data.bot, data.chatId, "No Quote has been requested at the moment.");
}

module.exports = showQuoteRequests; 