const sendHTML = require("../utils/sendHTML");

const showActiveQuotation = (data) =>{
    const htmlMessage = 
   `S_no: <b>1</b>\nProduct Name: Apple\nYour Price: 100 Rs\nPack Size: 1 Kg\n\nS_no: <b>2</b>\nProduct Name: Banana\nYour Price: 60 Rs\nPack Size: 1 dozen\n\nS_no: <b>3</b>\nProduct Name: Bhindi\nYour Price: 180 Rs\nPack Size: 5 Kg\n\n`;

    sendHTML(data.bot, data.chatId, htmlMessage);
}

module.exports = showActiveQuotation; 