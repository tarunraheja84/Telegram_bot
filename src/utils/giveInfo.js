

const giveInfo = (bot, optionId, message) => {
    bot.telegram.answerCbQuery(optionId, message)
        .then(() => console.log('Reply sent.'))
        .catch((error) => console.error('Error sending message:', error));
};

module.exports = giveInfo;