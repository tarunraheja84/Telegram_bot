

const sendHTML = (bot, chatId, htmlMessage) => {
    bot.telegram.sendMessage(chatId, htmlMessage, {
        parse_mode: 'HTML'
    })
        .then(() => console.log('HTML message sent successfully'))
        .catch((error) => console.error('Error sending HTML message:', error));
};

module.exports = sendHTML;