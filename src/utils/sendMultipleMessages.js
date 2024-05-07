

const sendMultipleMessages = (bot, chatIds, message) => {
    const promises = [];
    chatIds.forEach((chatId) => {
        promises.push(bot.telegram.sendMessage(chatId, message));
    });
    Promise.allSettled(promises)
        .then(() => console.log('Messages sent successfully'))
        .catch((error) => console.error('Error sending messages:', error));
};

module.exports = sendMultipleMessages;