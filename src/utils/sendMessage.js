

const sendMessage = (bot, chatId, message) => {
    bot.telegram.sendMessage(chatId, message)
        .then(() => console.log('Message sent successfully'))
        .catch((error) => console.error('Error sending message:', error));
};

module.exports = sendMessage;