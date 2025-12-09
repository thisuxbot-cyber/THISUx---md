const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/thisuxbot-cyber/THISUx---md/blob/main/images/669.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 THISUMA Is Alive Now😍*",
BOT_OWNER: '94721048343',  // Replace with the owner's phone number



};
