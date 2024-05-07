const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
const { homeKeyboard, homeOptions } = require('./home.js');
const respond = require('./respond.js');
dotenv.config();

// Initialize your bot
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);


// Middleware to log messages
bot.use((ctx, next) => {
    console.log(ctx.update);
    return next();
});


// bot on first initial start button
bot.start((ctx) => {
    if (ctx.message && ctx.message.text) {
        ctx.reply(`Hi ${ctx.chat.first_name}, Welcome to FlavrFood.`, {
            reply_markup:{
                inline_keyboard: [
                    [{ text: 'CONNECT', callback_data: homeOptions.connect }]
                ]
            }
        });
    }
});


// bot on text
bot.on('text', (ctx) => {
    if (ctx.message && ctx.message.text) {
        ctx.reply(`Hi ${ctx.chat.first_name}, Welcome to FlavrFood.`, {
            reply_markup:{
                inline_keyboard: homeKeyboard
            }
        });
    }
});


// bot on option select
bot.on('callback_query', async (ctx) => {
    const data ={ bot: bot, 
                  chatId: ctx.callbackQuery.from.id, 
                  optionId: ctx.callbackQuery.id,
                  userName: ctx.callbackQuery.from.first_name,
                  selectedOption: ctx.callbackQuery.data};
    respond(data);
    // to stop option focus
    await ctx.answerCbQuery();
});


// Launch bot
bot.launch();

const PORT = 5000;
console.log(`Bot started on Port ${PORT}`);