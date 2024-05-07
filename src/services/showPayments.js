const sendMessage = require('../utils/sendMessage.js');

const showPayments = (data) =>{
    sendMessage(data.bot, data.chatId, "FlavrFood has not placed any order with you yet.");
}

module.exports = showPayments; 